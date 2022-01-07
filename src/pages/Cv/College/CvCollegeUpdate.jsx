import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvCollegeService from '../../../services/cvcollegeService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvCollegeUpdate() {
    let { id } = useParams();
    const [cvColleges, setCvColleges] = useState([]);
    let cvCollegeService = new CvCollegeService();

    useEffect(() => {
        cvCollegeService.getById(id).then(result => setCvColleges(result.data.data))
    }, []);

    const initialValue = {
        id: cvColleges.id,
        collegeName: cvColleges.collegeName
    }

    const schema = Yup.object({
        collegeName: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cvCollegeService.update(values);
        toast.success(`${values.collegeName} başarı ile güncellendi.`)
        window.location.replace("/cvCollege");
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
                    <input type="hidden" name='id' />
                    <AKGTextInput label="collegeName" name="collegeName" placeholder="collegeName" />
                    <Button color="green" type="submit" >Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
