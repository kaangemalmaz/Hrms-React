import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import CityService from '../../services/cityService';
import EmployerService from '../../services/employerService';
import JobService from '../../services/jobService';
import TypeOfWorkService from '../../services/typeOfWorkService';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import { Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import AKGDropdown2 from '../../utilities/CustomFormControl/AKGDropdown2';
import { useParams } from 'react-router-dom';


export default function JobPostingAdd() {

    let { id } = useParams();

    const [cities, setCities] = useState([]);
    const [employers, setEmployers] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [typeOfWorks, setTypeOfWorks] = useState([]);
    const [typeOfWorkTimes, setTypeOfWorkTime] = useState([]);

    let jobPostingService = new JobPostingService();
    let employerService = new EmployerService();
    let cityService = new CityService();
    let jobService = new JobService();
    let typeOfWorkService = new TypeOfWorkService();
    let typeOfWorkTimeService = new TypeOfWorkTimeService();

    useEffect(() => {
        employerService.getAll().then((result) => setEmployers(result.data.data));
        cityService.getAll().then((result) => setCities(result.data.data));
        jobService.getAll().then((result) => setJobs(result.data.data));
        typeOfWorkService.getAll().then((result) => setTypeOfWorks(result.data.data));
        typeOfWorkTimeService.getAll().then((result) => setTypeOfWorkTime(result.data.data));
    }, [])

    const schema = Yup.object({
        applicationDeadline: Yup.date().required("Field is required."),
        openPositions: Yup.number().positive("Not a positive number").required("Field is required."),
        releaseDate: Yup.date().required("Field is required."),
        salary: Yup.string().required("Field is required."),
        salaryMax: Yup.string().required("Field is required."),
        salaryMin: Yup.string().required("Field is required."),
        jobDescription: Yup.string().required("Field is required."),
        // employerId: Yup.number().required("Field is required."),
        cityId: Yup.number().required("Field is required."),
        jobId: Yup.number().required("Field is required."),
        typeOfWorkTimeId: Yup.number().required("Field is required."),
        typeofWorkId: Yup.number().required("Field is required."),
    });

    const initialValues = {
        applicationDeadline: "",
        jobDescription: "",
        openPositions: 0,
        releaseDate: "",
        salary: "",
        salaryMax: "",
        salaryMin: "",
        active: false,
        employerId: '',
        cityId: '',
        jobId: '',
        typeofWorkId: '',
        typeOfWorkTimeId: '',
    };

    const onSubmit = (values) => {
        let addJobPost = {
            applicationDeadline: values.applicationDeadline,
            openPositions: values.openPositions,
            releaseDate: values.releaseDate,
            salary: values.salary,
            salaryMax: values.salaryMax,
            salaryMin: values.salaryMin,
            employer: { id: id },
            city: { id: values.cityId },
            job: { id: values.jobId },
            typeOfWorkTime: { id: values.typeOfWorkTimeId },
            typeofWork: { id: values.typeofWorkId },
            jobDescription: values.jobDescription
        }
        //debugger;
        jobPostingService.add(addJobPost);
        toast.success(`${values.jobDescription} başarı ile eklendi`)
    };

    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id
    }))

    const employerOptions = employers.map((employer, index) => ({
        key: index,
        text: employer.companyName,
        value: employer.id
    }))

    const jobOptions = jobs.map((job, index) => ({
        key: index,
        text: job.title,
        value: job.id
    }))

    const typeOfWorkTimeOptions = typeOfWorkTimes.map((typeOfWorkTime, index) => ({
        key: index,
        text: typeOfWorkTime.workTimeType,
        value: typeOfWorkTime.id
    }))

    const typeofWorkOptions = typeOfWorks.map((typeOfWork, index) => ({
        key: index,
        text: typeOfWork.workType,
        value: typeOfWork.id
    }))

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form" >
                    <AKGTextInput label = "Dead Line" name="applicationDeadline" placeholder="applicationDeadline" />
                    <AKGTextInput label = "Open Position"  name="openPositions" placeholder="openPositions" />
                    <AKGTextInput label = "Release Date" name="releaseDate" placeholder="releaseDate" />
                    <AKGTextInput label = "Salary" name="salary" placeholder="salary" />
                    <AKGTextInput label = "Max Salary" name="salaryMax" placeholder="salaryMax" />
                    <AKGTextInput label = "Min Salary" name="salaryMin" placeholder="salaryMin" />
                    <AKGTextInput label = "Job Description" name="jobDescription" placeholder="jobDescription" />

                    {/* <AKGTextInput name="cityId" placeholder="cityId" />
                    <AKGTextInput name="employerId" placeholder="employerId" />
                    <AKGTextInput name="jobId" placeholder="jobId" />
                    <AKGTextInput name="typeOfWorkTimeId" placeholder="typeOfWorkTimeId" />
                    <AKGTextInput name="typeofWorkId" placeholder="typeofWorkId" /> */}


                    {/* <AKGDropdown label="City" name="cityId" options={cityOptions} />
                    <AKGDropdown label="Employer" name="employerId" options={employerOptions} />
                    <AKGDropdown label="Job" name="jobId" options={jobOptions} />
                    <AKGDropdown label="TypeOfWorkTime" name="typeOfWorkTimeId" options={typeOfWorkTimeOptions} />
                    <AKGDropdown label="TypeofWork" name="typeofWorkId" options={typeofWorkOptions} /> */}

                    <AKGDropdown2 label="City" name="cityId" defaultOption="Seçiniz" options={cityOptions}  />
                    {/* <AKGDropdown2 label="Employer" name="employerId" defaultOption="Seçiniz" options={employerOptions} /> */}
                    <AKGDropdown2 label="Job" name="jobId" defaultOption="Seçiniz" options={jobOptions} />
                    <AKGDropdown2 label="TypeOfWorkTime" name="typeOfWorkTimeId" defaultOption="Seçiniz" options={typeOfWorkTimeOptions} />
                    <AKGDropdown2 label="TypeofWork" name="typeofWorkId" defaultOption="Seçiniz" options={typeofWorkOptions} />


                    {/* <Dropdown2 label="City" name="city" defaultOption="Seçiniz" options={cityOptions}  />
                    <Dropdown2 label="Employer" name="employer" defaultOption="Seçiniz" options={employerOptions} />
                    <Dropdown2 label="Job" name="job" defaultOption="Seçiniz" options={jobOptions} />
                    <Dropdown2 label="TypeOfWorkTime" name="typeOfWorkTime" defaultOption="Seçiniz" options={typeOfWorkTimeOptions} />
                    <Dropdown2 label="TypeofWork" name="typeofWork" defaultOption="Seçiniz" options={typeofWorkOptions} /> */}

                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}