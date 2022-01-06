import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvCollegeDepartmentService from '../../../services/cvCollegeDepartmentService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvCollegeDepartmentUpdate() {

    let { id } = useParams();
    const [cvCollegeDepartments, setCvCollegeDepartments] = useState([]);
    let cvCollegeDepartmentService = new CvCollegeDepartmentService();

    useEffect(() => {
        cvCollegeDepartmentService.getById(id).then(result => setCvCollegeDepartments(result.data.data))
    }, []);

    const initialValue = { 
        id : cvCollegeDepartments.id,
        collegeDepartmentName: cvCollegeDepartments.collegeDepartmentName 
    }

    const schema = Yup.object({
        collegeDepartmentName: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cvCollegeDepartmentService.update(values);
        toast.success(`${values.collegeDepartmentName} başarı ile güncellendi.`)
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                enableReinitialize
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <input type="hidden" name='id'/>
                    <AKGTextInput label="collegeDepartmentName" name="collegeDepartmentName" placeholder="collegeDepartmentName" />
                    <Button color="green" type="submit" >Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
