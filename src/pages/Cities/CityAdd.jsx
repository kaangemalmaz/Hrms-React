import React from 'react'
import { toast } from 'react-toastify';
import CityService from '../../services/cityService';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';

export default function CityAdd() {

    let cityService = new CityService();

    const initialValue = { name: "" }

    const schema = Yup.object ({
        name: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cityService.add(values);
        toast.success(`${values.name} başarı ile eklendi`)
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="name" placeholder="name." />
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
