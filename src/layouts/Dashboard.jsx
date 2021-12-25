import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CandidateAdd from "../pages/Candidates/CandidateAdd";
import CandidateList from "../pages/Candidates/CandidateList";
import CityAdd from "../pages/Cities/CityAdd";
import CityList from "../pages/Cities/CityList";
import CityUpdate from "../pages/Cities/CityUpdate";
import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import EmployeeList from "../pages/Employee/EmployeeList";
import EmployeeUpdate from "../pages/Employee/EmployeeUpdate";
import EmployerAdd from "../pages/Employers/EmployerAdd";
import EmployerList from "../pages/Employers/EmployerList";
import JobPostingAdd from "../pages/JobPostings/JobPostingAdd";
import JobPostingsList from "../pages/JobPostings/JobPostingsList";
import JobAdd from "../pages/Jobs/JobAdd";
import JobList from "../pages/Jobs/JobList";
import JobUpdate from "../pages/Jobs/JobUpdate";
import CandidateLogin from "../pages/Login/CandidateLogin";
import EmployeeLogin from "../pages/Login/EmployeeLogin";
import EmployerLogin from "../pages/Login/EmployerLogin";
import TypeOfWorkAdd from "../pages/TypeOfWork/TypeOfWorkAdd";
import TypeOfWorkList from "../pages/TypeOfWork/TypeOfWorkList";
import TypeOfWorkUpdate from "../pages/TypeOfWork/TypeOfWorkUpdate";
import TypeOfWorkTimeAdd from "../pages/TypeOfWorkTime/TypeOfWorkTimeAdd";
import TypeOfWorkTimeList from "../pages/TypeOfWorkTime/TypeOfWorkTimeList";
import TypeOfWorkTimeUpdate from "../pages/TypeOfWorkTime/TypeOfWorkTimeUpdate";
import Login from "./Login";
import MainPage from "./MainPage";
import Register from "./Register";


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logIn" component={Login} />
            <Route exact path="/candidateLogin" component={CandidateLogin} />
            <Route exact path="/employeeLogin" component={EmployeeLogin} />
            <Route exact path="/employerLogin" component={EmployerLogin} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/candidates/add" component={CandidateAdd} />
            <Route exact path="/cities" component={CityList} />
            <Route exact path="/cities/add" component={CityAdd} />
            <Route exact path="/cities/update/:id" component={CityUpdate} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/employers/add" component={EmployerAdd} />
            <Route exact path="/employee/add" component={EmployeeAdd} />
            <Route exact path="/employee/update/:id" component={EmployeeUpdate} />
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path="/jobpostings" component={JobPostingsList} />
            <Route exact path="/jobpostings/add" component={JobPostingAdd} />
            <Route exact path="/jobs" component={JobList} />
            <Route exact path="/jobs/add" component={JobAdd} />
            <Route exact path="/jobs/update/:id" component={JobUpdate} />
            <Route exact path="/typeofwork" component={TypeOfWorkList} />
            <Route exact path="/typeofwork/add" component={TypeOfWorkAdd} />
            <Route exact path="/typeofwork/update/:id" component={TypeOfWorkUpdate} />
            <Route exact path="/typeofworktime" component={TypeOfWorkTimeList} />
            <Route exact path="/typeofworktime/add" component={TypeOfWorkTimeAdd} />
            <Route exact path="/typeofworktime/update/:id" component={TypeOfWorkTimeUpdate} />
        </div>
    )
}