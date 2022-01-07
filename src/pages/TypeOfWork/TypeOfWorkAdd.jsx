import { Form, Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import TypeOfWorkService from '../../services/typeOfWorkService';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';

export default function TypeOfWorkAdd() {

    let typeofworkService = new TypeOfWorkService();

    const initialValue = {
        workType: ""
    }

    const schema = Yup.object ({
        workType: Yup.string().required("İş tipi girmek zorunludur.")
    })

    const onSubmit = (values) => {
        typeofworkService.add(values);
        toast.success(`${values.workType} başarı ile eklendi`)
        window.location.replace("/typeofwork");
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="workType" placeholder="İş tipini seçiniz" />
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
