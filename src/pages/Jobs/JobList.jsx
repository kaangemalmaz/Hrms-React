import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import JobService from '../../services/jobService';


export default function JobList() {
    const [jobs, setJobs] = useState([]);

    let jobService = new JobService();

    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.
        let jobService = new JobService();
        jobService.getAll().then(result => setJobs(result.data.data))
        //burada result.data
        //         "success": true,
        //   "message": "Ürünler Listelendi.",
        //   "data": [
        //hepsini birden döndürür biz buradan sadece datayı alacağımız için data.data şeklinde yazdık unutma!
    })

    const onSubmit = (values) => {
        jobService.delete(values.id);
        toast.success(`${values.title} başarı ile silinmiştir.`)
    }


    return (
        <div>
            <Button basic color='yellow'><Link to={"/jobs/add/"}>Yeni iş ekleyiniz.</Link></Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
                        <Table.HeaderCell>İşlemler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        jobs.map((job) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={job.id} >
                                <Table.Cell>{job.title}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='yellow'><Link to={"/jobs/update/" + job.id}>Güncelle</Link></Button>
                                    <Button basic color='red' onClick={() => onSubmit(job)}>Sil</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
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