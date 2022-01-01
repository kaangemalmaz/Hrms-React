import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Button, Card, Grid } from 'semantic-ui-react'

export default function EmployeeLogin() {

    let { id } = useParams();

    return (
        <div>
            <Grid.Row  >
                <Grid.Column>
                    <Card.Group centered >
                        <Card>
                            <Card.Content>
                                <Card.Header>İş İlanı Onayla</Card.Header>
                                <hr />
                                <Card.Description>
                                    İş İlanı onaylama işlemi için aşağıya tıklayınız.
                                    <br /><br />
                                    <Button primary as={NavLink} to={"/employee/confirmJobPosting/" + id} >Onayla</Button>
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
                                    <Button primary as={NavLink} to={"/employee/update/"+id} >Güncelle</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </div>
    )
}
