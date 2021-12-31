import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table } from 'semantic-ui-react';
import JobPostingConfirmService from '../../services/jobPostingConfirmService';
import JobPostingService from '../../services/jobPostingService';

export default function ConfirmJobPosting() {

    let { id } = useParams();
    const [jobPostings, setJobPostings] = useState([]);
    let jobPostingService = new JobPostingService();
    let jobPostingConfirmService = new JobPostingConfirmService();

    useEffect(() => {
        jobPostingService.getAllActiveFalse().then(result => setJobPostings(result.data.data))
    })

    const onSubmit = (values) => {
        let jobPostingConfirmDdo = {
            confirmed: true,
            employee: { id: id },
            jobPosting: { id: values.id },
        }
        jobPostingConfirmService.update(jobPostingConfirmDdo);
        toast.success(`${values.job.title} başarı ile silinmiştir.`)
    }

    return (
        <div>
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
                        <Table.HeaderCell>İşlem</Table.HeaderCell>
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
                                <Table.Cell>
                                    <Button basic color='green' onClick={() => onSubmit(jobPosting)}>Doğrula</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
