import { Form, Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvCollegeService from '../../../services/cvcollegeService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvCollegeAdd() {

    let cvCollegeService = new CvCollegeService();

    const initialValue = { collegeName: "" }

    const schema = Yup.object({
        collegeName: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cvCollegeService.add(values);
        toast.success(`${values.collegeName} başarı ile eklendi`)
        window.location.replace("/cvCollege");
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput label="collegeName" name="collegeName" placeholder="collegeName" />
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
