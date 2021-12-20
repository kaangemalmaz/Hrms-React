import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Grid } from 'semantic-ui-react'

export default function Register() {
    return (
        <div>
            <Grid.Row  >
                <Grid.Column>
                    <Card.Group centered >
                        <Card>
                            <Card.Content>
                                <Card.Header>İş Veren Kaydı</Card.Header>
                                <hr />
                                <Card.Description>
                                    İşveren olarak sitemizde kayıt oluşturmak için aşağıya tıklayınız.
                                    <br /><br />
                                    <Button primary as={NavLink} to="/employers/add" >İş veren kaydı ekle</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Card.Header>Aday Kaydı</Card.Header>
                                <hr />
                                <Card.Description>
                                    Aday olarak sitemizde kayıt oluşturmak için aşağıya tıklayınız.
                                    <br /><br />
                                    <Button primary as={NavLink} to="/candidates/add" >Aday kaydı ekle</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Card.Header>Personel Kaydı</Card.Header>
                                <hr />
                                <Card.Description>
                                    Personel olarak sitemizde kayıt oluşturmak için aşağıya tıklayınız.
                                    <br /><br />
                                    <Button primary as={NavLink} to="/employee/add" >Personel kaydı ekle</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </div>
    )
}
