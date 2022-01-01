import React from 'react'
import { Divider } from 'semantic-ui-react'
import JobPostingsList from '../pages/JobPostings/JobPostingsList'
import MainCrausel from './MainCrausel'

export default function MainPage() {

    return (
        <div>
            <MainCrausel/>
            <Divider horizontal>Son İş ilanlarını inceleyiniz</Divider>
            {/* <JobPostingsList /> */}
        </div>
    )
}
