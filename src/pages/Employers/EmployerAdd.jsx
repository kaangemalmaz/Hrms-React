import React from 'react'
import EmployerService from '../../services/employerService'
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';

export default function EmployerAdd() {

    let employerService = new EmployerService();

    const initialValues = {
        companyName: "",
        email: "",
        firmPhone: "",
        firmWebSite: "",
        password: "",
        repassword: "",
    }

    const schema = Yup.object({
        companyName: Yup.string().required("Firma ismi zorunludur."),
        email: Yup.string().required("Firma Email zorunludur."),
        firmPhone: Yup.string().required("Firma Telefonu zorunludur."),
        firmWebSite: Yup.string().required("Firma Websitesi zorunludur."),
        password: Yup.string().required("Şifre zorunludur."),
        repassword: Yup.string().required("Şifre tekrar zorunludur."),
    })

    const onSubmit = (values) => {
        employerService.add(values);
        toast.success(`${values.email} başarı ile eklendi`)
        window.location.replace("/logIn");
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput name="companyName" label="Firma İsmi" placeholder="Firma isim giriniz." />
                    <AKGTextInput name="email" label="Eposta adresi" placeholder="Firma email giriniz." />
                    <AKGTextInput name="firmPhone" label="Firma Telefonu" placeholder="Firma telefon numarası giriniz." />
                    <AKGTextInput name="firmWebSite" label="Firma Web Sitesi" placeholder="Firma Web Sitesi giriniz." />
                    <AKGTextInput name="password" label="Şifre" placeholder="Şifre giriniz." />
                    <AKGTextInput name="repassword" label="Şifre tekrar" placeholder="Şifre tekrar giriniz." />
                    <br />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
