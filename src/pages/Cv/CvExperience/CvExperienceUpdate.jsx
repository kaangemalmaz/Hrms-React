import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CvService from '../../../services/cvService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';
import AKGDropdown2 from '../../../utilities/CustomFormControl/AKGDropdown2';
import JobService from '../../../services/jobService';
import AKGCheckbox from '../../../utilities/CustomFormControl/AKGCheckbox';

export default function CvExperienceUpdate() {

    let { userid } = useParams();
    let { experienceid } = useParams();

    const [cvExperience, setCvExperience] = useState([]);
    const [jobs, setJobs] = useState([]);

    let cvService = new CvService();
    let jobService = new JobService();

    useEffect(() => {
        cvService.getByIdCvExperience(experienceid).then(result => setCvExperience(result.data.data));
        jobService.getAll().then((result) => setJobs(result.data.data));
    }, []);

    const initialValue = {
        id : cvExperience.id,
        workplaceName: cvExperience.workplaceName,
        workStartedYear: cvExperience.workStartedYear,
        workLeftYear: cvExperience.workLeftYear ? cvExperience.workLeftYear : "-",
        isWorking: cvExperience.isWorking,
        jobId: cvExperience.job?.id
    };

    const schema = Yup.object({
        workplaceName: Yup.string().required("Field is required."),
        workStartedYear: Yup.string().required("Field is required."),
        isWorking: Yup.boolean().required("Field is required."),
        jobId: Yup.number().required("Field is required."),
    });

    const onSubmit = (values) => {
        let cvExperienceUpdDto = {
            id : values.id,
            candidate: { id: userid },
            workplaceName: values.workplaceName,
            workStartedYear: values.workStartedYear,
            workLeftYear: values.workLeftYear,
            isWorking: values.isWorking,
            job: { id: values.jobId },
        }
        cvService.updateCvExperience(cvExperienceUpdDto);
        toast.success(`${values.workplaceName} başarı ile güncellendi`)
        window.location.replace("/candidate/cv/" + userid);
        
    }

    //let checkedTrue = cvExperience.isWorking ? "checked" : "";

    const JobOptions = jobs.map((job, index) => ({
        key: index,
        text: job.title,
        value: job.id
    }))

    return (
        <Formik
            initialValues={initialValue}
            enableReinitialize
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Form className="ui form">
                <input type="hidden" name="id" />
                <AKGTextInput label="workplaceName" name="workplaceName" placeholder="workplaceName" />
                <AKGTextInput label="workStartedYear" name="workStartedYear" placeholder="workStartedYear" />
                <AKGTextInput label="workLeftYear" name="workLeftYear" placeholder="workLeftYear" />
                {/* <AKGTextInput label="isWorking" name="isWorking" placeholder="isWorking" /> */}
                <AKGCheckbox name="isWorking" label='Çalışmaya devam ediyor mu?' />
                <AKGDropdown2 label="Job" name="jobId" defaultOption="Seçiniz" options={JobOptions} />
                <Button color="green" type="submit">Güncelle</Button>
            </Form>
        </Formik>
    )
}
