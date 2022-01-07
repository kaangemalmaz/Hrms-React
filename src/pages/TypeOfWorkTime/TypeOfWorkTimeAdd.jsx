import { Form, Formik } from 'formik';
import React from 'react'
import { Button } from 'semantic-ui-react';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function TypeOfWorkTimeAdd() {

    let typeofworktimeService = new TypeOfWorkTimeService();

    const initialValue = {
        workTimeType: ""
    }

    const schema = Yup.object({
        workTimeType: Yup.string().required("Çalışma tipi girmek zorunludur.")
    })

    const onSubmit = (values) => {
        console.log(values);
        typeofworktimeService.add(values);
        toast.success(`${values.workTimeType} başarı ile eklendi`)
        window.location.replace("/typeofworktime");
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="workTimeType" placeholder="İş tipini seçiniz" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
