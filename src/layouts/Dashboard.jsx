import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CandidateAdd from "../pages/Candidates/CandidateAdd";
import CandidateCvGet from "../pages/Candidates/CandidateCvGet";
import CandidateList from "../pages/Candidates/CandidateList";
import CityAdd from "../pages/Cities/CityAdd";
import CityList from "../pages/Cities/CityList";
import CityUpdate from "../pages/Cities/CityUpdate";
import CvCollegeAdd from "../pages/Cv/College/CvCollegeAdd";
import CvCollegeList from "../pages/Cv/College/CvCollegeList";
import CvCollegeUpdate from "../pages/Cv/College/CvCollegeUpdate";
import CvCollegeDepartmentAdd from "../pages/Cv/CollegeDepartment/CvCollegeDepartmentAdd";
import CvCollegeDepartmentList from "../pages/Cv/CollegeDepartment/CvCollegeDepartmentList";
import CvCollegeDepartmentUpdate from "../pages/Cv/CollegeDepartment/CvCollegeDepartmentUpdate";
import CvCoverLetterAdd from "../pages/Cv/CoverLetter/CvCoverLetterAdd";
import CvCoverLetterUpdate from "../pages/Cv/CoverLetter/CvCoverLetterUpdate";
import CvExperienceAdd from "../pages/Cv/CvExperience/CvExperienceAdd";
import CvExperienceUpdate from "../pages/Cv/CvExperience/CvExperienceUpdate";
import CvEducationAdd from "../pages/Cv/Education/CvEducationAdd";
import CvEducationUpdate from "../pages/Cv/Education/CvEducationUpdate";
import CvKnowLanguageAdd from "../pages/Cv/KnowLanguage/CvKnowLanguageAdd";
import CvKnowLanguageUpdate from "../pages/Cv/KnowLanguage/CvKnowLanguageUpdate";
import CvLanguageAdd from "../pages/Cv/Languages/CvLanguageAdd";
import CvLanguageList from "../pages/Cv/Languages/CvLanguageList";
import CvLanguageUpdate from "../pages/Cv/Languages/CvLanguageUpdate";
import CvSocialMediaAdd from "../pages/Cv/SocialMedia/CvSocialMediaAdd";
import CvSocialMediaUpdate from "../pages/Cv/SocialMedia/CvSocialMediaUpdate";
import CvTeknologyAdd from "../pages/Cv/TeknologyInfo/CvTeknologyAdd";
import CvTeknologyUpdate from "../pages/Cv/TeknologyInfo/CvTeknologyUpdate";
import ConfirmEmployerUpdate from "../pages/Employee/ConfirmEmployerUpdate";
import ConfirmJobPosting from "../pages/Employee/ConfirmJobPosting";
import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import EmployeeList from "../pages/Employee/EmployeeList";
import EmployeeUpdate from "../pages/Employee/EmployeeUpdate";
import EmployerAdd from "../pages/Employers/EmployerAdd";
import EmployerDetails from "../pages/Employers/EmployerDetails";
import EmployerList from "../pages/Employers/EmployerList";
import EmployerUpdate from "../pages/Employers/EmployerUpdate";
import JobPostingAdd from "../pages/JobPostings/JobPostingAdd";
import JobPostingDetail from "../pages/JobPostings/JobPostingDetail";
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
            <Route exact path="/employeeLogin/:id" component={EmployeeLogin} />
            <Route exact path="/employerLogin/:id" component={EmployerLogin} />
            <Route exact path="/candidateLogin/:id" component={CandidateLogin} />

            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/candidates/add" component={CandidateAdd} />
            <Route exact path="/candidate/cv/:id" component={CandidateCvGet} />

            {/* socialmedia */}
            <Route exact path="/candidate/cv/:id/addsocialmedia" component={CvSocialMediaAdd} />
            <Route exact path="/candidate/cv/:userid/updsocialmedia/:socialid" component={CvSocialMediaUpdate} />
            {/* socialmedia */}

            {/* teknology */}
            <Route exact path="/candidate/cv/:id/addteknology" component={CvTeknologyAdd} />
            <Route exact path="/candidate/cv/:userid/updteknology/:teknologyid" component={CvTeknologyUpdate} />
            {/* teknology */}

            {/* cover letter */}
            <Route exact path="/candidate/cv/:id/addcoverletter" component={CvCoverLetterAdd} />
            <Route exact path="/candidate/cv/:userid/updcoverletter/:coverletterid" component={CvCoverLetterUpdate} />
            {/* cover letter */}

            {/* CvKnowLanguage */}
            <Route exact path="/candidate/cv/:id/addcvknowlanguage" component={CvKnowLanguageAdd} />
            <Route exact path="/candidate/cv/:userid/updcvknowlanguage/:knowlanguageid" component={CvKnowLanguageUpdate} />
            {/* CvKnowLanguage */}

            {/* CvExperience */}
            <Route exact path="/candidate/cv/:id/addcvexperience" component={CvExperienceAdd} />
            <Route exact path="/candidate/cv/:userid/updcvexperience/:experienceid" component={CvExperienceUpdate} />
            {/* CvExperience */}

            {/* CvLanguages */}
            <Route exact path="/cvLanguages" component={CvLanguageList} />
            <Route exact path="/cvLanguages/add" component={CvLanguageAdd} />
            <Route exact path="/cvLanguages/update/:id" component={CvLanguageUpdate} />
            {/* CvLanguages */}

            {/* CvCollegeDepartment */}
            <Route exact path="/cvCollegeDepartment" component={CvCollegeDepartmentList} />
            <Route exact path="/cvCollegeDepartment/add" component={CvCollegeDepartmentAdd} />
            <Route exact path="/cvCollegeDepartment/update/:id" component={CvCollegeDepartmentUpdate} />
            {/* CvCollegeDepartment */}

            {/* CvCollege */}
            <Route exact path="/cvCollege" component={CvCollegeList} />
            <Route exact path="/cvCollege/add" component={CvCollegeAdd} />
            <Route exact path="/cvCollege/update/:id" component={CvCollegeUpdate} />
            {/* CvCollege */}

            {/* CvEducation */}
            <Route exact path="/candidate/cv/:id/addcveducation" component={CvEducationAdd} />
            <Route exact path="/candidate/cv/:userid/updcveducation/:educationid" component={CvEducationUpdate} />
            {/* CvEducation */}

            <Route exact path="/cities" component={CityList} />
            <Route exact path="/cities/add" component={CityAdd} />
            <Route exact path="/cities/update/:id" component={CityUpdate} />

            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/employers/add" component={EmployerAdd} />
            <Route exact path="/employer/update/:id" component={EmployerUpdate} />
            <Route exact path="/employer/detail/:id" component={EmployerDetails} />

            <Route exact path="/employee/add" component={EmployeeAdd} />
            <Route exact path="/employee/update/:id" component={EmployeeUpdate} />
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path="/employee/confirmJobPosting/:id" component={ConfirmJobPosting} />
            <Route exact path="/employee/ConfirmEmployerUpdate/:id" component={ConfirmEmployerUpdate} />

            <Route exact path="/jobpostings" component={JobPostingsList} />
            <Route exact path="/jobpostings/:id" component={JobPostingsList} />
            <Route exact path="/jobpostings/add" component={JobPostingAdd} />
            <Route exact path="/jobpostings/add/:id" component={JobPostingAdd} />
            <Route exact path="/jobpostings/detail/:id" component={JobPostingDetail} />

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