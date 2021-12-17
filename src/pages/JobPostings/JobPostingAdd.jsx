import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import CityService from '../../services/cityService';
import EmployerService from '../../services/employerService';
import JobService from '../../services/jobService';
import TypeOfWorkService from '../../services/typeOfWorkService';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import { Form, Formik, useFormik } from 'formik';
import { Button, FormSelect } from 'semantic-ui-react';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
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

    const initialValue = {
        applicationDeadline: "",
        jobDescription: "",
        openPositions: 0,
        releaseDate: "",
        salary: "",
        salaryMax: "",
        salaryMin: "",
        employer: "",
        city: "",
        job: "",
        typeofWork: "",
        typeOfWorkTime: "",
        active: false,
    }

    const schema = Yup.object({
        applicationDeadline: Yup.date().required("Field is required."),
        openPositions: Yup.number().required("Field is required."),
        releaseDate: Yup.date().required("Field is required."),
        salary: Yup.string().required("Field is required."),
        salaryMax: Yup.string().required("Field is required."),
        salaryMin: Yup.string().required("Field is required."),
        employer: Yup.object().required("Field is required."),
        city: Yup.object().required("Field is required."),
        job: Yup.object().required("Field is required."),
        typeOfWorkTime: Yup.object().required("Field is required."),
        typeofWork: Yup.object().required("Field is required."),
        jobDescription: Yup.string().required("Field is required."),
    })

    const onSubmit = (values) => {
        jobPostingService.add(values);
        toast.success(`${values.job.name} başarı ile eklendi`)
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: schema,
        onSubmit: onSubmit,
    });

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <div>
            <Formik >

                <Form className="ui form" >
                    <AKGTextInput name="applicationDeadline" placeholder="applicationDeadline" 
                    onChange={(event, data) => handleChange("applicationDeadline", data.value)}
                    value={formik.values.applicationDeadline}
                    />
                    <AKGTextInput name="openPositions" placeholder="openPositions" 
                    onChange={(event, data) => handleChange("openPositions", data.value)}
                    value={formik.values.openPositions}
                    />
                    <AKGTextInput name="releaseDate" placeholder="releaseDate" 
                    onChange={(event, data) => handleChange("releaseDate", data.value)}
                    value={formik.values.releaseDate}
                    />
                    <AKGTextInput name="salary" placeholder="salary" 
                    onChange={(event, data) => handleChange("salary", data.value)}
                    value={formik.values.salary}
                    />
                    <AKGTextInput name="salaryMax" placeholder="salaryMax" 
                    onChange={(event, data) => handleChange("salaryMax", data.value)}
                    value={formik.values.salaryMax}
                    />
                    <AKGTextInput name="salaryMin" placeholder="salaryMin" 
                    onChange={(event, data) => handleChange("salaryMin", data.value)}
                    value={formik.values.salaryMin}
                    />
                    <AKGTextInput name="jobDescription" placeholder="jobDescription" 
                    onChange={(event, data) => handleChange("jobDescription", data.value)}
                    value={formik.values.jobDescription}
                    />

                    <FormSelect
                        name="city" label="City" options={cityOptions}
                        // onChange={(event, city) => city.value}
                        //onChange={(event, data) => data.value}
                        onChange={(event, data) => handleChange("city", data.value)}
                        value={formik.values.city}
                    //value={(event,data) => console.log(data.value)}
                    />

                    <FormSelect
                        name="employer" label="Employer" options={employerOptions}
                        //    onChange={(event, data) => data.value}
                        onChange={(event, data) => handleChange("employer", data.value)}
                        value={formik.values.employer}
                    // value={formik.values.employer}
                    />

                    <FormSelect
                        name="job" label="Job" options={jobOptions}
                        //onChange={(event, data) => data.value}
                        onChange={(event, data) => handleChange("job", data.value)}
                        value={formik.values.job}
                    // value={formik.values.job}
                    />

                    <FormSelect
                        name="typeOfWorkTime" label="typeOfWorkTime" options={typeOfWorkTimeOptions}
                        //    onChange={(event, data) => data.value}
                        onChange={(event, data) => handleChange("typeOfWorkTime", data.value)}
                        value={formik.values.typeOfWorkTime}
                    // value={formik.values.typeOfWorkTime}
                    />

                    <FormSelect
                        name="typeofwork" label="typeofwork" options={typeofWorkOptions}
                        //    onChange={(event, data) => data.value}
                        onChange={(event, data) => handleChange("typeofwork", data.value)}
                        value={formik.values.typeofwork}
                    // value={formik.values.typeofWork}
                    />

                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}

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