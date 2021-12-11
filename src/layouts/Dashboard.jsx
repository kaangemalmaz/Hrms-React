import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CandidateList from "../pages/Candidates/CandidateList";
import CityList from "../pages/Cities/CityList";
import EmployerList from "../pages/Employers/EmployerList";
import JobPostingsList from "../pages/JobPostings/JobPostingsList";
import JobList from "../pages/Jobs/JobList";
import MainPage from "./MainPage";


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/cities" component={CityList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobpostings" component={JobPostingsList} />
            <Route exact path="/jobs" component={JobList} />
        </div>
    )
}