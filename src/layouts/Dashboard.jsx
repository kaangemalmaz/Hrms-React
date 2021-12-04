import React from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import { Divider } from "semantic-ui-react";
import CandidateList from "../pages/Candidates/CandidateList";
import CityList from "../pages/Cities/CityList";
import EmployerList from "../pages/Employers/EmployerList";
import JobPostingsList from "../pages/JobPostings/JobPostingsList";
import JobList from "../pages/Jobs/JobList";


import MainCrausel from "./MainCrausel";


export default function Dashboard() {
    return (
        <div>
            <MainCrausel/>
            <Divider horizontal>Son İş ilanlarını inceleyiniz</Divider>
            <JobList></JobList>
            <br />
            <CandidateList></CandidateList>
            <br />
            <EmployerList></EmployerList>
            <br />
            <CityList></CityList>
            <br />
            <JobPostingsList></JobPostingsList>
            {/* <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Başvur
                        </Button>
                        <Button basic color='blue'>
                            İncele
                        </Button>
                    </div>
                </Card.Content>
            </Card> */}
        </div>
    )
}