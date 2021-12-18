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
        let addJobPost = {
            applicationDeadline: values.applicationDeadline,
            openPositions: values.openPositions,
            releaseDate: values.releaseDate,
            salary: values.salary,
            salaryMax: values.salaryMax,
            salaryMin: values.salaryMin,
            employer: { id: values.employer },
            city: { id: values.city },
            job: { id: values.job },
            typeOfWorkTime: { id: values.typeOfWorkTime },
            typeofWork : {id:values.typeofWork},
            jobDescription: values.jobDescription
        }
        console.log(addJobPost);
        jobPostingService.add(addJobPost);
        toast.success(`${addJobPost.job.text} başarı ile eklendi`)
    };

    // const formik = useFormik({
    //     initialValues: initialValue,
    //     validationSchema: schema,
    //     onSubmit: onSubmit,
    // });

    // const handleChange = (fieldName, value) => {
    //     formik.setFieldValue(fieldName, value);
    // };

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >

                <Form className="ui form" >
                    <AKGTextInput name="applicationDeadline" label="applicationDeadline" placeholder="applicationDeadline" />
                    <AKGTextInput name="openPositions" label="openPositions" placeholder="openPositions" />
                    <AKGTextInput name="releaseDate" label="releaseDate" placeholder="releaseDate" />
                    <AKGTextInput name="salary" label="salary" placeholder="salary" />
                    <AKGTextInput name="salaryMax" label="salaryMax" placeholder="salaryMax" />
                    <AKGTextInput name="salaryMin" label="salaryMin" placeholder="salaryMin" />
                    <AKGTextInput name="jobDescription" label="jobDescription" placeholder="jobDescription" />
                    <AKGDropdown name="city" label="City" options={cityOptions} />
                    <AKGDropdown name="employer" label="Employer" options={employerOptions} />
                    <AKGDropdown name="job" label="Job" options={jobOptions} />
                    <AKGDropdown name="typeOfWorkTime" label="TypeOfWorkTime" options={typeOfWorkTimeOptions} />
                    <AKGDropdown name="typeofwork" label="typeofwork" options={typeofWorkOptions} />

                    {/* <FormSelect
                        name="city" label="City" search selection options={cityOptions}
                        // onChange={(event, city) => city.value}
                        //onChange={(event, data) => data.value}
                        // onChange={(event, data) => handleChange("city", data.value)}
                        // value={formik.values.city}
                    //value={(event,data) => console.log(data.value)}
                    />

                    <FormSelect
                        name="employer" label="Employer" search selection options={employerOptions}
                        //    onChange={(event, data) => data.value}
                        // onChange={(event, data) => handleChange("employer", data.value)}
                        // value={formik.values.employer}
                    // value={formik.values.employer}
                    />

                    <FormSelect
                        name="job" label="Job" search selection options={jobOptions}
                        //onChange={(event, data) => data.value}
                        // onChange={(event, data) => handleChange("job", data.value)}
                        // value={formik.values.job}
                    // value={formik.values.job}
                    />

                    <FormSelect
                        name="typeOfWorkTime" label="typeOfWorkTime" search selection options={typeOfWorkTimeOptions}
                        //    onChange={(event, data) => data.value}
                        // onChange={(event, data) => handleChange("typeOfWorkTime", data.value)}
                        // value={formik.values.typeOfWorkTime}
                    // value={formik.values.typeOfWorkTime}
                    />

                    <FormSelect
                        name="typeofwork" label="typeofwork" search selection options={typeofWorkOptions}
                        //    onChange={(event, data) => data.value}
                        //onChange={(event, data) => handleChange("typeofwork", data.value)}
                        //value={formik.values.typeofwork}
                    // value={formik.values.typeofWork}
                    /> */}

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