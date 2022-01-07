import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Checkbox, FormCheckbox } from 'semantic-ui-react';
import * as Yup from "yup";
import CvService from '../../../services/cvService';
import JobService from '../../../services/jobService';
import AKGCheckbox from '../../../utilities/CustomFormControl/AKGCheckbox';
import AKGDropdown2 from '../../../utilities/CustomFormControl/AKGDropdown2';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvExperienceAdd() {

    let { id } = useParams();

    const [jobs, setJobs] = useState([]);

    let cvService = new CvService();
    let jobService = new JobService();

    useEffect(() => {
        jobService.getAll().then((result) => setJobs(result.data.data));
    }, [])

    const initialValue = {
        workplaceName: '',
        workStartedYear: '',
        workLeftYear: '',
        isWorking: '',
        jobId: ''
    };

    const schema = Yup.object({
        workplaceName: Yup.string().required("Field is required."),
        workStartedYear: Yup.string().required("Field is required."),
        isWorking: Yup.boolean().required("Field is required."),
        jobId: Yup.number().required("Field is required."),
    });

    const onSubmit = (values) => {
        let cvExperienceAddDto = {
            candidate: { id: id },
            workplaceName: values.workplaceName,
            workStartedYear: values.workStartedYear,
            workLeftYear: values.workLeftYear ? values.workLeftYear : "-",
            isWorking: values.isWorking,
            job: { id: values.jobId },
        }
        cvService.addCvExperience(cvExperienceAddDto);
        toast.success(`${values.workplaceName} başarı ile eklendi`)
        window.location.replace("/candidate/cv/" +id);
    };

    const JobOptions = jobs.map((job, index) => ({
        key: index,
        text: job.title,
        value: job.id
    }))


    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput label="workplaceName" name="workplaceName" placeholder="workplaceName" />
                    <AKGTextInput label="workStartedYear" name="workStartedYear" placeholder="workStartedYear" />
                    <AKGTextInput label="workLeftYear" name="workLeftYear" placeholder="workLeftYear" />
                    {/* <AKGTextInput label="isWorking" name="isWorking" placeholder="isWorking" /> */}
                    <AKGCheckbox name="isWorking" label='Çalışmaya devam ediyor mu?' />
                    <AKGDropdown2 label="Job" name="jobId" defaultOption="Seçiniz" options={JobOptions} />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
