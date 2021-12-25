import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import CityService from '../../services/cityService';
import EmployerService from '../../services/employerService';
import JobService from '../../services/jobService';
import TypeOfWorkService from '../../services/typeOfWorkService';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import { Field, Formik, useFormik } from 'formik';
import { Form, Button, Dropdown, Select } from 'semantic-ui-react';
import AKGDropdown from '../../utilities/CustomFormControl/AKGDropdown';


export default function JobPostingAdd() {

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
        employerId: Yup.object().required("Field is required."),
        cityId: Yup.object().required("Field is required."),
        jobId: Yup.object().required("Field is required."),
        typeOfWorkTimeId: Yup.object().required("Field is required."),
        typeofWorkId: Yup.object().required("Field is required."),
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
        // let addJobPost = {
        //     applicationDeadline: values.applicationDeadline,
        //     openPositions: values.openPositions,
        //     releaseDate: values.releaseDate,
        //     salary: values.salary,
        //     salaryMax: values.salaryMax,
        //     salaryMin: values.salaryMin,
        //     employer: { id: values.employer },
        //     city: { id: values.city },
        //     job: { id: values.job },
        //     typeOfWorkTime: { id: values.typeOfWorkTime },
        //     typeofWork: { id: values.typeofWork },
        //     jobDescription: values.jobDescription
        // }
        console.log(values);
        jobPostingService.add(values);
        toast.success(`${values.job.text} başarı ile eklendi`)
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: onSubmit
    });

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
            <Formik>
                <Form onSubmit={formik.handleSubmit} className="ui form" >
                    <Form.Input name="applicationDeadline" label="applicationDeadline" placeholder="applicationDeadline"
                        onChange={(event, data) => formik.setFieldValue("applicationDeadline", data.value)}
                        value={formik.values.applicationDeadline}
                    />

                    <Form.Input name="openPositions" label="openPositions" placeholder="openPositions"
                        onChange={(event, data) => formik.setFieldValue("openPositions", data.value)}
                        value={formik.values.openPositions}
                    />

                    <Form.Input name="releaseDate" label="releaseDate" placeholder="releaseDate"
                        onChange={(event, data) => formik.setFieldValue("releaseDate", data.value)}
                        value={formik.values.releaseDate}
                    />

                    <Form.Input name="salary" label="salary" placeholder="salary"
                        onChange={(event, data) => formik.setFieldValue("salary", data.value)}
                        value={formik.values.salary}
                    />

                    <Form.Input name="salaryMax" label="salaryMax" placeholder="salaryMax"
                        onChange={(event, data) => formik.setFieldValue("salaryMax", data.value)}
                        value={formik.values.salaryMax}
                    />

                    <Form.Input name="salaryMin" label="salaryMin" placeholder="salaryMin"
                        onChange={(event, data) => formik.setFieldValue("salaryMin", data.value)}
                        value={formik.values.salaryMin}
                    />

                    <Form.Input name="jobDescription" label="jobDescription" placeholder="jobDescription"
                        onChange={(event, data) => formik.setFieldValue("jobDescription", data.value)}
                        value={formik.values.jobDescription}
                    />

                    <AKGDropdown label="City" name="cityId" options={cityOptions} />
                    <AKGDropdown label="Employer" name="employerId" options={employerOptions} />
                    <AKGDropdown label="Job" name="jobId" options={jobOptions} />
                    <AKGDropdown label="TypeOfWorkTime" name="typeOfWorkTimeId" options={typeOfWorkTimeOptions} />
                    <AKGDropdown label="TypeofWork" name="typeofWorkId" options={typeofWorkOptions} />

                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}