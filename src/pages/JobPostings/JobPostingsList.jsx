import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import FavoriteJobPosting from '../../services/favoriteJobPosting';
import JobPostingService from '../../services/jobPostingService';


export default function JobPostingsList() {
    let { id } = useParams();
    let favoriteJobPosting = new FavoriteJobPosting();
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.
        let jobPostingService = new JobPostingService();
        jobPostingService.getAll().then(result => setJobPostings(result.data.data))
        //burada result.data
        //         "success": true,
        //   "message": "Ürünler Listelendi.",
        //   "data": [
        //hepsini birden döndürür biz buradan sadece datayı alacağımız için data.data şeklinde yazdık unutma!
    })

    const onSubmit = (values) => {
        let favoriteJobDto = {
            candidate: { id: id },
            jobPosting: { id: values.id }
        }
        favoriteJobPosting.add(favoriteJobDto);
        toast.success(`${values.job.title} başarı ile favorilere eklenmiştir.`)
    }

    return (
        <div>
            {/* <Button basic color='yellow'><Link to={"/jobpostings/add"}>İş ekleyiniz.</Link></Button> */}
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
                        <Table.HeaderCell colSpan='7'>
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
        </div>
    )
}
