import { Form, Formik } from 'formik'
import React from 'react'
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput'
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';

export default function CandidateAdd() {

    const initialValues = {
        birthDay: "",
        email : "",
        identityNo: "",
        name : "",
        password : "",
        repassword : "",
        surname : "",
    }

    const schema = Yup.object({
        birthDay: Yup.string().required("Doğum Tarihi girilmelidir."),
        email: Yup.string().required("Email girilmelidir."),
        identityNo: Yup.string().required("TCKN girilmelidir."),
        name: Yup.string().required("İsim girilmelidir."),
        password: Yup.string().required("Şifre girilmelidir."),
        repassword: Yup.string().required("Şifre girilmelidir."),
        surname: Yup.string().required("Soyadı girilmelidir."),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Form className="ui form">
                    <AKGTextInput name="name" placeholder="İsim seçiniz" />
                    <AKGTextInput name="surname" placeholder="Soyadı seçiniz" />
                    <AKGTextInput name="identityNo" placeholder="TCKN seçiniz" />
                    <AKGTextInput name="email" placeholder="Email seçiniz" />
                    <AKGTextInput name="birthDay" placeholder="Çalışma Tipini seçiniz" />
                    <AKGTextInput name="password" placeholder="Şifre seçiniz" />
                    <AKGTextInput name="repassword" placeholder="Şifre seçiniz" />
                    
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
