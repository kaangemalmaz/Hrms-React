import { Form, Formik } from 'formik'
import React from 'react'
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput'
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import CandidateService from '../../services/candidateService';
import { toast } from 'react-toastify';

export default function CandidateAdd() {

    let candidateService = new CandidateService();

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

    const onSubmit = (values) => {
        candidateService.add(values);
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
                    <AKGTextInput name="name" label= "İsminiz" placeholder="İsim seçiniz" />
                    <AKGTextInput name="surname" label= "Soyadınız" placeholder="Soyadı seçiniz" />
                    <AKGTextInput name="identityNo" label= "TC Kimlik No" placeholder="TCKN seçiniz" />
                    <AKGTextInput name="email" label= "Eposta adresi" placeholder="Email seçiniz" />
                    <AKGTextInput name="birthDay" label= "Doğum Tarihiniz" placeholder="Çalışma Tipini seçiniz" />
                    <AKGTextInput name="password" label= "Şifre" placeholder="Şifre seçiniz" />
                    <AKGTextInput name="repassword" label= "Şifre tekrar" placeholder="Şifre seçiniz" />
                    <br />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
