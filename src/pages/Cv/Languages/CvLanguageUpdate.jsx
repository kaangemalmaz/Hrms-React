import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvLanguageService from '../../../services/cvLanguageService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvLanguageUpdate() {

    let { id } = useParams();
    const [cvLanguages, setCvLanguages] = useState([]);
    let cvLanguageService = new CvLanguageService();

    useEffect(() => {
        cvLanguageService.getById(id).then(result => setCvLanguages(result.data.data))
    }, []);

    const initialValue = { 
        id : cvLanguages.id,
        languageName: cvLanguages.languageName 
    }

    const schema = Yup.object({
        languageName: Yup.string().required("Field is required.")
    })

    const onSubmit = (values) => {
        cvLanguageService.update(values);
        toast.success(`${values.languageName} başarı ile güncellendi.`)
        window.location.replace("/cvLanguages");
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
                    <AKGTextInput label="languageName" name="languageName" placeholder="languageName" />
                    <Button color="green" type="submit" >Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
