import React from 'react'
import CvCollegeDepartmentService from '../../../services/cvCollegeDepartmentService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';

export default function CvCollegeDepartmentAdd() {

    let cvCollegeDepartmentService = new CvCollegeDepartmentService();

    const initialValue = { collegeDepartmentName: "" }

    const schema = Yup.object({
        collegeDepartmentName: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cvCollegeDepartmentService.add(values);
        toast.success(`${values.collegeDepartmentName} başarı ile eklendi`)
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput label="collegeDepartmentName" name="collegeDepartmentName" placeholder="collegeDepartmentName" />
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
