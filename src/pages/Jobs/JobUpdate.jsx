import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JobService from '../../services/jobService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';

export default function JobUpdate() {

    let jobService = new JobService();
    let { id } = useParams();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobService.getById(id).then(result => setJobs(result.data.data))
    }, [])

    const initialValue = {
        id: jobs.id,
        title: jobs.title
    };

    const schema = Yup.object({
        id: Yup.number().required("Required Field"),
        title: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        jobService.update(values);
        toast.success(`${values.title} başarı ile güncellendi`)
        window.location.replace("/jobs");
    }

    return (
        <div>
            <Formik
                    initialValues={initialValue}
                    enableReinitialize
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Form className="ui form">
                        <input type="hidden" name="id" />
                        <AKGTextInput name="title" placeholder="title" />
                        <Button color="green" type="submit">Güncelle</Button>
                    </Form>

                </Formik>
        </div>
    )
}
