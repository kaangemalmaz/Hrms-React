import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Button, Card, Grid } from 'semantic-ui-react';

export default function EmployerLogin() {

    let { id } = useParams();

    return (
        <div>
            <Grid.Row>
                <Grid.Column>
                    <Card.Group centered >
                        <Card>
                            <Card.Content>
                                <Card.Header>İş İlanı Ver</Card.Header>
                                <hr />
                                <Card.Description>
                                    İş İlanı vermek için aşağıya tıklayınız.
                                    <br /><br />
                                    <Button primary as={NavLink} to={"/jobpostings/add/" + id} >Onayla</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Card.Header>Bilgilerinizi Güncelleyin</Card.Header>
                                <hr />
                                <Card.Description>
                                    Bilgilerinizi güncellemek için aşağıya tıklayınız.
                                    <br /><br />
                                    <Button primary as={NavLink} to={"/employer/update/"+id} >Güncelle</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </div>
    )
}
