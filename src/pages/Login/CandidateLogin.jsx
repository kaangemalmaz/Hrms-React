import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import UserService from '../../services/userService'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function CandidateLogin() {

    let { id } = useParams();

    return (
        <div>
            <Grid.Row  >
                <Grid.Column>
                    <Card.Group centered >
                        <Card>
                            <Card.Content>
                                <Card.Header>İş İlanı Görüntüle</Card.Header>
                                <hr />
                                <Card.Description>
                                    İş İlanlarını görüntülemek için aşağıdaki butona tıklayabilirsiniz.
                                    <br /><br />
                                    <Button primary as={NavLink} to={"/jobpostings/" + id} >Onayla</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Card.Header>CV Görüntüle</Card.Header>
                                <hr />
                                <Card.Description>
                                    CV görüntülemek için aşağıdaki butona tıklayabilirsiniz.
                                    <br /><br />
                                    <Button primary as={NavLink} to={"/jobpostings/" + id} >Onayla</Button>
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
                                    {/* <Button primary as={NavLink} to={"/employee/update/"+id} >Güncelle</Button> */}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </div>
    )
}
