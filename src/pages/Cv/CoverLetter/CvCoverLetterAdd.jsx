import { Form, Formik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import CvService from '../../../services/cvService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import * as Yup from "yup";

export default function CvCoverLetterAdd() {
    let { id } = useParams();
    let cvService = new CvService();
    
    const initialValue = { coverLetter: '' };

    const schema = Yup.object({
        coverLetter: Yup.string().required("Field is required."),
    });

    const onSubmit = (values) => {
        let coverLetterDto = {
            candidate: { id: id },
            coverLetter: values.coverLetter,
        }
        cvService.addCvCoverLetter(coverLetterDto);
        toast.success(`${values.coverLetter} başarı ile eklendi`)
    };


    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput label="coverLetter" name="coverLetter" placeholder="coverLetter" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
