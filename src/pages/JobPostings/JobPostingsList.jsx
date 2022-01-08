import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Grid, Label, Pagination, Select, Table } from 'semantic-ui-react';
import CityService from '../../services/cityService';
import FavoriteJobPosting from '../../services/favoriteJobPosting';
import JobPostingService from '../../services/jobPostingService';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import AKGDropdown2 from '../../utilities/CustomFormControl/AKGDropdown2';
import Paginator from 'react-hooks-paginator';


export default function JobPostingsList() {

    //job posting için favorilere ekleme için candidate id yi almayı sağlar.
    let { id } = useParams();

    // const [jobPostings, setJobPostings] = useState([]);
    const [jobPostingsAll, setJobPostingsAll] = useState([]);
    const [cities, setCities] = useState([]);
    const [typeOfWorkTimes, setTypeOfWorkTime] = useState([]);

    const [pageNo, setPageNo] = useState(1); //default 1 değeri atar page numarası olarak.
    const [pageSize, setPageSize] = useState(1); //bir sayfada toplamda gelecek datayı belirler.
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); //current page değişimini sağlar.
    const [currentData, setCurrentData] = useState([]); //tüm datayı alarak o an gösterilecek dataya göre currentdata olarak ele alınır.

    let jobPostingService = new JobPostingService();
    let favoriteJobPosting = new FavoriteJobPosting();
    let cityService = new CityService();
    let typeOfWorkTimeService = new TypeOfWorkTimeService();

    const handleChangePageSize = (event, { value }) => {
        setPageSize(value);
        setPageNo(1);
        setCurrentPage(1);
    };

    const pageSizeOptions = [
        { key: 1, value: 1, text: " 1 İlan" },
        { key: 2, value: 2, text: " 2 İlan" },
        { key: 5, value: 5, text: " 5 İlan" },
        { key: 10, value: 10, text: "10 İlan" },
    ];

    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.
        if (jobPostingsAll.length === 0) {
            jobPostingService.getAllActiveTrue().then(result => setJobPostingsAll(result.data.data));    
        }
        // jobPostingService.getAllActiveOnesByPage(pageNo, pageSize).then(result => setJobPostings(result.data.data));
        cityService.getAll().then((result) => setCities(result.data.data));
        typeOfWorkTimeService.getAll().then((result) => setTypeOfWorkTime(result.data.data));
        setCurrentData(jobPostingsAll.slice(offset, offset + pageSize));
        //verinin değerini gösterir. // slice : belirli aralıktaki dataları seçerek yeni bir dizi oluşturur dilimler yani öyle düşün.
        //offset() fonksiyonunu ile visibility:hidden; css özelliği olan nesnenin konumu alınamıyor fakat display: none; css değerini almış nesnenin konum değerleri alınamamaktadır.
        // yani offset varsa eğer toplam data 6 ise size 10 luk ise pagination kısmı gözükmüyor onun yerinin alması önleniyor. 
    }, [pageNo, pageSize, offset, jobPostingsAll])

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
        //unutma burada usestatelerden 1 tanesi bile değişse tüm kademeler yeniden render ediliyor.
        if (values.cityId !== 0 && values.typeOfWorkTimeId === 0) {
            setPageNo(1);
            setPageSize(10);
            jobPostingService.getBycityId(values.cityId).then(result => setJobPostingsAll(result.data.data));
            toast.success("Filtreleme işlemi yapılmıştır.");
        }
        else if (values.typeOfWorkTimeId !== 0 && values.cityId === 0) {
            setPageNo(1);
            setPageSize(10);
            jobPostingService.getBytypeOfWorkTimeId(values.typeOfWorkTimeId).then(result => setJobPostingsAll(result.data.data));
            toast.success("Filtreleme işlemi yapılmıştır.");
        }
        else if (values.typeOfWorkTimeId !== 0 && values.cityId !== 0) {
            setPageNo(1);
            setPageSize(10);
            jobPostingService.getBycityIdAndtypeOfWorkTimeId(values.cityId, values.typeOfWorkTimeId).then(result => setJobPostingsAll(result.data.data));
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
                        <Grid.Column width={2}><Button color='grey' type="submit" onClick={() => handleClick()}>Temizle</Button></Grid.Column>
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
                        currentData.map((jobPosting) => (
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


                {/* <label size="large" style={{ padding: "12px" }}>Bir Sayfadaki İlan Sayısını Belirle</label>{' '} */}
                <Table.Footer>
                    <Table.HeaderCell>
                        <Select
                            //onChange burada değişiklik olduğu zaten 
                            /*
                            const [pageNo, setPageNo] = useState(1);
                            const [pageSize, setPageSize] = useState(1);
                            değerleri set edilir çünkü usestate sayfanın yenilenmesini sağlar.
                            */
                            onChange={handleChangePageSize}
                            placeholder="Bir Sayfadaki İlan Sayısını Belirle"
                            defaultValue={1}
                            //pagesize key value text değerleri ile selecte verilecek bilgiler seçilir.
                            options={pageSizeOptions}
                        /><br />
                    </Table.HeaderCell>
                    <Table.HeaderCell colSpan='5'></Table.HeaderCell>
                    <Table.HeaderCell colSpan='14'>
                        <Paginator
                            //totalRecord paginator için toplamda kaç sayfa olacağını toplam sayı
                            //pageLimit = bir sayfada kaç tane data gözükeceğini gösterir.
                            //totalRecord toplam sayı/kaç data gözüktüğü ile aşağıda gösterir.
                            //pageNeighbours toplamda 10 tane varsa ..234.. şeklinde yanındakileri gösteriyor.
                            //current page ve  setCurrentPage değerlerini paginator ayarlıyor.
                            //const değerini tanımlayıp onun değerini yolluyorsun tamamdır olay.
                            totalRecords={Math.ceil(jobPostingsAll.length / pageSize)}
                            pageLimit={pageSize}
                            pageNeighbours={2}
                            setOffset={setOffset}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        // style={{ marginTop: "25pt" }}
                        // firstItem={null}
                        // lastItem={null}
                        // activePage={pageNo}
                        //onPageChange={handleChangePageNo}
                        // totalPages={5}
                        />
                    </Table.HeaderCell>
                </Table.Footer>
            </Table>
        </div >
    )
}
