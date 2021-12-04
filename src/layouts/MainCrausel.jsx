import React from 'react'
import { Divider, Grid, GridRow, Input, Segment, Button, Image, Header } from 'semantic-ui-react';

export default function MainCrausel() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={8}>
                        <Image src="https://res.cloudinary.com/merveucer/image/upload/v1631524668/resumes_xrhxpv.svg" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <br /><br />
                        <Header as='h1' color='red'>Yeni bir iş bulun</Header>
                        <Header as='h1' color='red'>veya</Header>
                        <Header as='h1' color='red'>Yeni bir iş ekleyin</Header>
                        <br /><br />
                        <Segment basic textAlign='center'>
                            <Input
                                action={{ color: 'blue', content: 'Search' }}
                                icon='search'
                                iconPosition='left'
                                placeholder='Search...'
                            />

                            <Divider horizontal>Or</Divider>

                            <Button
                                color='teal'
                                content='Yeni bir iş talebi giriniz.'
                                icon='add'
                                labelPosition='left'
                            />
                        </Segment>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
