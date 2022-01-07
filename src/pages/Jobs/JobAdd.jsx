import React from 'react'
import JobService from '../../services/jobService';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { toast } from 'react-toastify';

export default function JobAdd() {

    let jobService = new JobService();

    const initialValue = { title: "" }

    const schema = Yup.object({
        title: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        jobService.add(values);
        toast.success(`${values.title} başarı ile eklendi`)
        window.location.replace("/jobs");
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="title" label="title" placeholder="İş İsmini giriniz." />
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
