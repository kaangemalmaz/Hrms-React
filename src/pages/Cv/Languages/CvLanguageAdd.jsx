import { Form, Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import CvLanguageService from '../../../services/cvLanguageService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import * as Yup from "yup";

export default function CvLanguageAdd() {

    let cvLanguageService = new CvLanguageService();

    const initialValue = { languageName: "" }

    const schema = Yup.object({
        languageName: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cvLanguageService.add(values);
        toast.success(`${values.languageName} başarı ile eklendi`)
        window.location.replace("/cvLanguages");
    }

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput label="languageName" name="languageName" placeholder="languageName" />
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
