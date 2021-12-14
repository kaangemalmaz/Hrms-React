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
import { Button, Dropdown, Label, Select } from 'semantic-ui-react';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import DatePicker, { ReactDatePicker } from "react-datepicker";

export default function JobPostingAdd() {

    let jobPostingService = new JobPostingService();
    let employerService = new EmployerService();
    let cityService = new CityService();
    let jobService = new JobService();
    let typeOfWorkService = new TypeOfWorkService();
    let typeOfWorkTimeService = new TypeOfWorkTimeService();

    const [cities, setCities] = useState([]);
    const [employers, setEmployers] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [typeOfWorks, setTypeOfWorks] = useState([]);
    const [typeOfWorkTimes, setTypeOfWorkTime] = useState([]);

    useEffect(() => {
        employerService.getAll().then(result => setEmployers(result.data.data));
        cityService.getAll().then(result => setCities(result.data.data));
        jobService.getAll().then(result => setJobs(result.data.data));
        typeOfWorkService.getAll().then(result => setTypeOfWorks(result.data.data));
        typeOfWorkTimeService.getAll().then(result => setTypeOfWorkTime(result.data.data));
    }, [])

    const getCities = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.name,
    }));

    const initialValue = {
        applicationDeadline: "",
        jobDescription: "",
        openPositions: 0,
        releaseDate: "",
        salary: "",
        salaryMax: "",
        salaryMin: "",
        employer: employers,
        city: cities,
        job: jobs,
        typeofWork: typeOfWorks,
        typeOfWorkTime: typeOfWorkTimes
    }

    const schema = Yup.object({
        applicationDeadline: Yup.date().required("Field is required."),
        openPositions: Yup.number().required("Field is required."),
        releaseDate: Yup.date().required("Field is required."),
        salary: Yup.string().required("Field is required."),
        salaryMax: Yup.string().required("Field is required."),
        salaryMin: Yup.string().required("Field is required."),
        employer: Yup.string().required("Field is required."),
        city: Yup.string().required("Field is required."),
        job: Yup.string().required("Field is required."),
        typeOfWorkTime: Yup.string().required("Field is required."),
        typeofWork: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        // let jobPosting = {
        //     applicationDeadline:    {applicationDeadline: values.applicationDeadline},
        //     openPositions:          { openPositions: values.openPositions },
        //     releaseDate:            { releaseDate: values.releaseDate },
        //     salary:                 { salary: values.salary },
        //     salaryMax:              { salaryMax: values.salaryMax },
        //     salaryMin:              { salaryMin: values.salaryMin },
        //     city:                   { city: values.city_id },
        //     employer:               { employer: values.employer_id },
        //     job:                    { job: values.job_id },
        //     typeOfWorkTime:         { typeOfWorkTime: values.typeOfWorkTime_id },
        //     typeofWork:             { typeofWork: values.typeofWork_id }
        // };
        jobPostingService.add(values);
        toast.success(`${values.title} başarı ile eklendi`)
    }

    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id
    }));

    const employerOptions = employers.map((employer, index) => ({
        key: index,
        text: employer.companyName,
        value: employer.id
    }));

    const jobOptions = jobs.map((job, index) => ({
        key: index,
        text: job.title,
        value: job.id
    }));

    const typeOfWorkTimeOptions = typeOfWorkTimes.map((typeOfWorkTime, index) => ({
        key: index,
        text: typeOfWorkTime.workTimeType,
        value: typeOfWorkTime.id
    }));

    const typeofWorkOptions = typeOfWorks.map((typeOfWork, index) => ({
        key: index,
        text: typeOfWork.workType,
        value: typeOfWork.id
    }));

    return (
        <div>
            <Formik
                initialValues={initialValue}
                enableReinitialize
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="applicationDeadline" placeholder="applicationDeadline" />
                    <AKGTextInput name="openPositions" placeholder="openPositions" />
                    <AKGTextInput name="releaseDate" placeholder="releaseDate" />
                    <AKGTextInput name="salary" placeholder="salary" />
                    <AKGTextInput name="salaryMax" placeholder="salaryMax" />
                    <AKGTextInput name="salaryMin" placeholder="salaryMin" />

                    <div>
                        <Label>City</Label>
                        <br /><br />
                        <Dropdown
                            placeholder='Select City'
                            name = "city"
                            fluid
                            selection
                            options={cityOptions}
                            onChange={(event, data) =>
                                cities.setFieldValue("city", data.value)}
                        />
                    </div>

                    <div>
                        <Label>Employer</Label>
                        <br /><br />
                        <Dropdown
                            placeholder='Select Employer'
                            name = "employer"
                            fluid
                            selection
                            options={employerOptions}
                            // onChange={(event, data) => handleChange("employer", data.value)}
                            // onChange={(event, data) =>
                            //     cities.setFieldValue("employer", data.value)}
                        />
                    </div>

                    <div>
                        <Label>Job</Label>
                        <br /><br />
                        <Dropdown
                            placeholder='Select Job'
                            name = "job"
                            fluid
                            selection
                            options={jobOptions}
                            onChange={(event, data) =>
                                cities.setFieldValue("job", data.value)}
                        />
                    </div>

                    <div>
                        <Label>Type Of Work Time</Label>
                        <br /><br />
                        <Dropdown
                            placeholder='Select Type Of Work Time'
                            name = "typeofworktime"
                            fluid
                            selection
                            options={typeOfWorkTimeOptions}
                            onChange={(event, data) =>
                                cities.setFieldValue("typeofworktime", data.value)}
                        />
                    </div>

                    <div>
                        <Label>Type of Work</Label>
                        <br /><br />
                        <Dropdown
                            placeholder='Select Type of Work'
                            name = "typeofwork"
                            fluid
                            selection
                            options={typeofWorkOptions}
                            onChange={(event, data) =>
                                cities.setFieldValue("typeofwork", data.value)}
                        />
                    </div>
                    
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
