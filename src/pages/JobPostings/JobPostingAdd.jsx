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
import { Button, Dropdown, FormInput, FormSelect } from 'semantic-ui-react';
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

    const cityOptions = cities.map((city) => ({
        key: city.id,
        text: city.name,
        value: city
    }));

    const employerOptions = employers.map((employer) => ({
        key: employer.id,
        text: employer.companyName,
        value: employer
    }));

    const jobOptions = jobs.map((job) => ({
        key: job.id,
        text: job.title,
        value: job
    }));

    const typeOfWorkTimeOptions = typeOfWorkTimes.map((typeOfWorkTime) => ({
        key: typeOfWorkTime.id,
        text: typeOfWorkTime.workTimeType,
        value: typeOfWorkTime
    }));

    const typeofWorkOptions = typeOfWorks.map((typeOfWork) => ({
        key: typeOfWork.id,
        text: typeOfWork.workType,
        value: typeOfWork
    }));

    const initialValues = {
        applicationDeadline: "",
        jobDescription: "",
        openPositions: 1,
        releaseDate: "",
        salary: "",
        salaryMax: "",
        salaryMin: "",
        active: false,
        employer: employers,
        city: cities,
        job: jobs,
        typeofWork: typeOfWorks,
        typeOfWorkTime: typeOfWorkTimes,
    };

    const schema = Yup.object({
        applicationDeadline: Yup.date().required("Field is required."),
        openPositions: Yup.number().positive("Not a positive number").required("Field is required."),
        releaseDate: Yup.date().required("Field is required."),
        salary: Yup.string().required("Field is required."),
        salaryMax: Yup.string().required("Field is required."),
        salaryMin: Yup.string().required("Field is required."),
        jobDescription: Yup.string().required("Field is required."),
        employer: Yup.object().required("Field is required."),
        city: Yup.object().required("Field is required."),
        job: Yup.object().required("Field is required."),
        typeOfWorkTime: Yup.object().required("Field is required."),
        typeofWork: Yup.object().required("Field is required."),
    });

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
        onSubmit: onSubmit,
    });

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <div>
            <Formik>
                {({ setFieldValue }) => (
                    <Form className="ui form" onSubmit={formik.handleSubmit}>
                        <FormInput name="applicationDeadline" label="applicationDeadline" placeholder="applicationDeadline"
                            onChange={(event, data) => handleChange("applicationDeadline", data.value)}
                            value={formik.values.applicationDeadline}
                        />
                        <FormInput name="openPositions" label="openPositions" placeholder="openPositions"
                            onChange={(event, data) => handleChange("openPositions", data.value)}
                            value={formik.values.openPositions}
                        />
                        <FormInput name="releaseDate" label="releaseDate" placeholder="releaseDate"
                            onChange={(event, data) => handleChange("releaseDate", data.value)}
                            value={formik.values.releaseDate}
                        />
                        <FormInput name="salary" label="salary" placeholder="salary"
                            onChange={(event, data) => handleChange("salary", data.value)}
                            value={formik.values.salary}
                        />
                        <FormInput name="salaryMax" label="salaryMax" placeholder="salaryMax"
                            onChange={(event, data) => handleChange("salaryMax", data.value)}
                            value={formik.values.salaryMax}
                        />
                        <FormInput name="salaryMin" label="salaryMin" placeholder="salaryMin"
                            onChange={(event, data) => handleChange("salaryMin", data.value)}
                            value={formik.values.salaryMin}
                        />
                        <FormInput name="jobDescription" label="jobDescription" placeholder="jobDescription"
                            onChange={(event, data) => handleChange("jobDescription", data.value)}
                            value={formik.values.jobDescription}
                        />
                        {/* <AKGDropdown  name="city" label="City" options={cityOptions} />
                    <AKGDropdown  name="employer" label="Employer" options={employerOptions} />
                    <AKGDropdown  name="job" label="Job" options={jobOptions} />
                    <AKGDropdown  name="typeOfWorkTime" label="TypeOfWorkTime" options={typeOfWorkTimeOptions} />
                    <AKGDropdown  name="typeofwork" label="typeofwork" options={typeofWorkOptions} /> */}

                        <AKGDropdown
                            onChange={(fieldName, data) =>
                                setFieldValue("city.id", data.value)
                            }
                            name="city.id"
                            placeholder="Çalışma Türü Seçiniz"
                            options={cityOptions}
                        />

                        <AKGDropdown
                            onChange={(fieldName, data) =>
                                setFieldValue("employer.id", data.value)
                            }
                            name="employer.id"
                            placeholder="Çalışma Türü Seçiniz"
                            options={employerOptions}
                        />

                        <AKGDropdown
                            onChange={(fieldName, data) =>
                                setFieldValue("job.id", data.value)
                            }
                            name="job.id"
                            placeholder="Çalışma Türü Seçiniz"
                            options={jobOptions}
                        />

                        <AKGDropdown
                            onChange={(fieldName, data) =>
                                setFieldValue("typeOfWorkTime.id", data.value)
                            }
                            name="typeOfWorkTime.id"
                            placeholder="Çalışma Türü Seçiniz"
                            options={typeOfWorkTimeOptions}
                        />

                        <AKGDropdown
                            onChange={(fieldName, data) =>
                                setFieldValue("typeofwork.id", data.value)
                            }
                            name="typeofwork.id"
                            placeholder="Çalışma Türü Seçiniz"
                            options={typeofWorkOptions}
                        />

                        {/* <FormSelect
                        name="city" label="City" search selection options={cityOptions}
                        onChange={(event, data) => handleChange("city", data.value)}
                        value={formik.values.city || []}
                        multiple
                    />

                    <FormSelect
                        name="employer" label="Employer" search selection options={employerOptions}
                        onChange={(event, data) => handleChange("employer", data.value)}
                        value={formik.values.employer || []}
                        multiple
                    />

                    <FormSelect
                        name="job" label="Job" search selection options={jobOptions}
                        onChange={(event, data) => handleChange("job", data.value)}
                        value={formik.values.job || []}
                        multiple
                    />

                    <FormSelect
                        name="typeOfWorkTime" label="typeOfWorkTime" search selection options={typeOfWorkTimeOptions}
                        onChange={(event, data) => handleChange("typeOfWorkTime", data.value)}
                        value={formik.values.typeOfWorkTime || []}
                        multiple
                    />

                    <FormSelect
                        name="typeofwork" label="typeofwork" search selection options={typeofWorkOptions}
                        onChange={(event, data) => handleChange("typeofwork", data.value)}
                        value={formik.values.typeofwork || []}
                        multiple
                    /> */}

                        <Button color="green" type="submit">Ekle</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}