import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Grid, Icon, Menu, Table } from 'semantic-ui-react';
import CityService from '../../services/cityService';
import FavoriteJobPosting from '../../services/favoriteJobPosting';
import JobPostingService from '../../services/jobPostingService';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import AKGDropdown2 from '../../utilities/CustomFormControl/AKGDropdown2';


export default function JobPostingsList() {
    
    //job posting için favorilere ekleme için candidate id yi almayı sağlar.
    let { id } = useParams();

    const [jobPostings, setJobPostings] = useState([]);
    const [cities, setCities] = useState([]);
    const [typeOfWorkTimes, setTypeOfWorkTime] = useState([]);

    let jobPostingService = new JobPostingService();
    let favoriteJobPosting = new FavoriteJobPosting();
    let cityService = new CityService();
    let typeOfWorkTimeService = new TypeOfWorkTimeService();

    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.
        jobPostingService.getAll().then(result => setJobPostings(result.data.data));
        cityService.getAll().then((result) => setCities(result.data.data));
        typeOfWorkTimeService.getAll().then((result) => setTypeOfWorkTime(result.data.data));
    }, [])

    //filter için iş çalışma zamanı tip bilgilerini getirir
    const typeOfWorkTimeOptions = typeOfWorkTimes.map((typeOfWorkTime, index) => ({
        key: index,
        text: typeOfWorkTime.workTimeType,
        value: typeOfWorkTime.id
    }))

    //filter için şehir bilgilerini getirir
    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id
    }))

    //favori iş ilanlarını eklemeyi sağlar.
    const onSubmit = (values) => {
        let favoriteJobDto = {
            candidate: { id: id },
            jobPosting: { id: values.id }
        }
        favoriteJobPosting.add(favoriteJobDto);
        toast.success(`${values.job.title} başarı ile favorilere eklenmiştir.`)
    }


    //hatalı atama olmaması için filter için 0 ataması yapar.
    const initialValue = {
        cityId: 0,
        typeOfWorkTimeId: 0
    }

    //Filter için hangi servisi çağıracağını belirler burada 0 olayını initialvalue de alır.
    const onFilter = (values) => {
        if (values.cityId !== 0 && values.typeOfWorkTimeId === 0) {
            jobPostingService.getBycityId(values.cityId).then(result => setJobPostings(result.data.data));
            toast.success("Filtreleme işlemi yapılmıştır.");
        }
        else if (values.typeOfWorkTimeId !== 0 && values.cityId === 0) {
            jobPostingService.getBytypeOfWorkTimeId(values.typeOfWorkTimeId).then(result => setJobPostings(result.data.data));
            toast.success("Filtreleme işlemi yapılmıştır.");
        }
        else if (values.typeOfWorkTimeId !== 0 && values.cityId !== 0) {
            jobPostingService.getBycityIdAndtypeOfWorkTimeId(values.cityId, values.typeOfWorkTimeId).then(result => setJobPostings(result.data.data));
            toast.success("Filtreleme işlemi yapılmıştır.");
        }
        else {
            //jobPostingService.getAll().then(result => setJobPostings(result.data.data));
            toast.info("Filtreleme için seçim yapmalısınız!!");
        }
    }


    //direk ekranı yeniler. //temizle arkasında çalışır.
    const handleClick = () => window.location.reload()

    return (
        <div>
            {/* <Button basic color='yellow'><Link to={"/jobpostings/add"}>İş ekleyiniz.</Link></Button> */}
            <Formik initialValues={initialValue} onSubmit={onFilter} >
                <Form className="ui form" >
                    <Grid columns='equal'>
                        <Grid.Column width={6}><AKGDropdown2 name="cityId" defaultOption="Şehir Seçiniz" options={cityOptions} /></Grid.Column>
                        <Grid.Column width={6}><AKGDropdown2 name="typeOfWorkTimeId" defaultOption="Çalışma Zaman Tipi Seçiniz" options={typeOfWorkTimeOptions} /></Grid.Column>
                        <Grid.Column width={2}><Button color="green" type="submit" >Filtre</Button></Grid.Column>
                        <Grid.Column width={2}><Button color='grey' type="submit" onClick={()=> handleClick()}>Temizle</Button></Grid.Column>
                    </Grid>
                </Form>
            </Formik>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>İş</Table.HeaderCell>
                        <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>
                        <Table.HeaderCell>İş Veren</Table.HeaderCell>
                        <Table.HeaderCell>Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Son Tarih</Table.HeaderCell>
                        <Table.HeaderCell>#</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        jobPostings.map((jobPosting) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={jobPosting.id} >
                                <Table.Cell>{jobPosting.city.name}</Table.Cell>
                                <Table.Cell>{jobPosting.job.title}</Table.Cell>
                                <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
                                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobPosting.salary}</Table.Cell>
                                <Table.Cell>{jobPosting.openPositions}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                                <Table.Cell><Button basic color='yellow' onClick={() => onSubmit(jobPosting)} >Favori Ekle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>


                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>
                            <Menu floated='left' pagination>
                                <Menu.Item as='a'>10</Menu.Item>
                                <Menu.Item as='a'>20</Menu.Item>
                                <Menu.Item as='a'>50</Menu.Item>
                                <Menu.Item as='a'>100</Menu.Item>
                            </Menu>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>

            </Table>
        </div >
    )
}
