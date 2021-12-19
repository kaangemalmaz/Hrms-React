import React from 'react'
import { toast } from 'react-toastify';
import EmployeeService from '../../services/employeeService'
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';

export default function EmployeeAdd() {
    let employeeService = new EmployeeService();

    const initialValues = {
        name: "",
        surname: "",
        title: "",
        email: "",
        password: "",
        repassword: "",
    }

    const schema = Yup.object({
        name: Yup.string().required("Personel ismi zorunludur."),
        surname: Yup.string().required("Personel soyismi zorunludur."),
        title: Yup.string().required("Personel iş bilgisi zorunludur."),
        email: Yup.string().required("Personel email zorunludur."),
        password: Yup.string().required("Şifre zorunludur."),
        repassword: Yup.string().required("Şifre tekrar zorunludur."),
    })

    const onSubmit = (values) => {
        employeeService.add(values);
        toast.success(`${values.email} başarı ile eklendi`)
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="name" label="Personel ismi" placeholder="Personel ismi giriniz." />
                    <AKGTextInput name="surname" label="Personel soyismi" placeholder="Personel soyismi giriniz." />
                    <AKGTextInput name="title" label="Personel başlık" placeholder="Personel başlık bilgisi giriniz." />
                    <AKGTextInput name="email" label="Personel Email" placeholder="Personel email bilgisi giriniz." />
                    <AKGTextInput name="password" label="Şifre" placeholder="Şifre giriniz." />
                    <AKGTextInput name="repassword" label="Şifre tekrar" placeholder="Şifre tekrar giriniz." />
                    <br />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
