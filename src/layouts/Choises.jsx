import React from 'react'
import { NavLink } from 'react-router-dom'
import { Advertisement, Button, Card, Grid, Icon, Image, Item } from 'semantic-ui-react'

export default function Choises() {

    const extra = (
        <a>
            <Icon name='user' />
            16 Friends
        </a>
    )


    return (
        <div>
            {/* <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Card
                            image='/images/avatar/large/elliot.jpg'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Card
                            image='/images/avatar/large/elliot.jpg'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
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
                                    <Button primary as={NavLink} to="/candidates/add" >İş veren kaydı ekle</Button>
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
                                    <Button primary as={NavLink} to="/candidates/add" >İş veren kaydı ekle</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
            <Grid stackable>
                {/* <Grid.Column floated='right' verticalAlign='middle' width={8}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column floated='left' width={8} verticalAlign='middle'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                   </Grid.Column> */}
            </Grid>
        </div>
    )
}
