import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Grid } from 'semantic-ui-react';
import JobPostingService from '../../services/jobPostingService';

export default function JobPostingDetail() {
    let { id } = useParams();

    const [jobPosting, setJobPosting] = useState({});
    let jobPostingService = new JobPostingService();

    useEffect(() => {
        jobPostingService.getById(id).then(result => setJobPosting(result.data.data))
    }, []);

    return (
        <div>
            <Grid>
                {/* <Grid.Column width={4}></Grid.Column> */}
                <Grid.Column width={16}>
                    <Card fluid>
                        {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                        <Card.Content><strong>İş Bilgileri</strong></Card.Content>
                        <Card.Content>
                            <Card.Header>{jobPosting.job?.title}</Card.Header>
                            <Card.Description><strong>Açılış  Tarihi :</strong> {jobPosting.releaseDate} - <strong>Kapanış Tarihi :</strong> {jobPosting.releaseDate}</Card.Description>

                            <Card.Description><strong>Çalışma Tipi  :</strong> {jobPosting.typeofWork?.workType}
                                -  <strong>Çalışma Şekli :</strong> {jobPosting.typeOfWorkTime?.workTimeType}</Card.Description>

                            <Card.Description><strong>Min Maaş :</strong> {jobPosting.salaryMin} -
                                <strong>Ort Maaş :</strong> {jobPosting.salary} -
                                <strong>Max Maaş :</strong> {jobPosting.salaryMax}</Card.Description>

                            <Card.Description>
                                <strong>{jobPosting.jobDescription}</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            Alınacak Kişi Sayısı : {jobPosting.openPositions}
                        </Card.Content>
                    </Card>
                </Grid.Column>

                {/* <Grid.Column width={3}></Grid.Column> */}
            </Grid>
            <Grid fluid>
                <Grid.Column width={16}>
                    <Card fluid>
                        <Card.Content><strong>İş Veren Bilgileri</strong></Card.Content>
                        <Card.Content>
                            <Card.Description> Şirket İsmi : {jobPosting.employer?.companyName} </Card.Description>
                            <Card.Description> Şirket Tel : {jobPosting.employer?.firmPhone} </Card.Description>
                            <Card.Description> Şirket Web : {jobPosting.employer?.firmWebSite} </Card.Description>
                            <Card.Description> Şirket Email : {jobPosting.employer?.email} </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>

            <Button basic color='yellow'><Link to={"/jobpostings/detail/" + jobPosting.id}>Detay</Link></Button>
        </div>
    )
}
