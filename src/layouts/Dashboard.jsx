import React from "react";
import { Grid, GridRow } from 'semantic-ui-react';  
import CandidateList from "../pages/Candidates/CandidateList";
import JobList from "../pages/Jobs/JobList";

export default function Dashboard() {
    return (
        <div>
            Ana sayfa
            <CandidateList/> 
            <JobList />
            <Grid>
                <GridRow>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={12}></Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}