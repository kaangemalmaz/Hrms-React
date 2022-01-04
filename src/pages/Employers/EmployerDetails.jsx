import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Grid, Message } from 'semantic-ui-react';
import EmployerService from '../../services/employerService';
import EmployerUpdateService from '../../services/employerUpdateService';

export default function EmployerDetails() {

    let { id } = useParams();

    let employerService = new EmployerService();
    let employerUpdateService = new EmployerUpdateService();

    const [employer, setEmployer] = useState({});
    const [employerUpdate, setEmployerUpdate] = useState(Number);

    useEffect(() => {
        employerService.getById(id).then(result => setEmployer(result.data.data));
        employerUpdateService.getByEmployerCountActiveTrue(id).then(result => setEmployerUpdate(result.data));
    }, []);

    return (
        <div>
            <Grid>
                <Grid.Column width={16}>
                    <Card fluid>
                        {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                        <Card.Content><strong>Şirket Bilgileri</strong></Card.Content>
                        <Card.Content>
                            
                            <Card.Description>Şirket Tel Num : {employer.firmPhone}</Card.Description>
                            <Card.Description>Şirket EPosta : {employer.email}</Card.Description>
                            <Card.Description>Şirket Password : {employer.password}</Card.Description>
                            <Card.Description>Şirket Password : {employer.repassword}</Card.Description>
                            <Card.Description>Şirket İsmi :  {employer.companyName}</Card.Description>
                            <Card.Description>Şirket Web Site : {employer.firmWebSite}</Card.Description>
                        </Card.Content>
                        <div >
                            {employerUpdate>0 ? (
                                <Message
                                error
                                
                                list={[
                                    'Bilgilerde güncelleme yapıldığı için onay beklenmektedir.',
                                    'Onaylandıktan sonra bilgiler ekrana yansımaktadır.',
                                ]}
                                />
                            ) : "" }
                        </div>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}
