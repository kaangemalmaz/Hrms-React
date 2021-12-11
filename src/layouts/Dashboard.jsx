import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CandidateAdd from "../pages/Candidates/CandidateAdd";
import CandidateList from "../pages/Candidates/CandidateList";
import CityList from "../pages/Cities/CityList";
import EmployerList from "../pages/Employers/EmployerList";
import JobPostingsList from "../pages/JobPostings/JobPostingsList";
import JobList from "../pages/Jobs/JobList";
import TypeOfWorkAdd from "../pages/TypeOfWork/TypeOfWorkAdd";
import TypeOfWorkList from "../pages/TypeOfWork/TypeOfWorkList";
import TypeOfWorkUpdate from "../pages/TypeOfWork/TypeOfWorkUpdate";
import MainPage from "./MainPage";


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/candidates/add" component={CandidateAdd} />
            <Route exact path="/cities" component={CityList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobpostings" component={JobPostingsList} />
            <Route exact path="/jobs" component={JobList} />
            <Route exact path="/typeofwork" component={TypeOfWorkList} />
            <Route exact path="/typeofwork/add" component={TypeOfWorkAdd} />
            <Route exact path="/typeofwork/update/:id" component={TypeOfWorkUpdate} />
            {/* <Route exact path="/typeofwork/delete" component={TypeOfWorkList} />  */}
        </div>
    )
}