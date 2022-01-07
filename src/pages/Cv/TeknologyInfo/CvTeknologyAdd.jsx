import { Form, Formik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import CvService from '../../../services/cvService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import * as Yup from "yup";

export default function CvTeknologyAdd() {
    let { id } = useParams();
    let cvService = new CvService();
    
    const initialValue = { technologyName: '' };

    const schema = Yup.object({
        technologyName: Yup.string().required("Field is required."),
    });

    const onSubmit = (values) => {
        let teknologyDto = {
            candidate: { id: id },
            technologyName: values.technologyName,
        }
        cvService.addCvTeknology(teknologyDto);
        toast.success(`${values.technologyName} başarı ile eklendi`)
        window.location.replace("/candidate/cv/" +id);
    };


    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGTextInput label="technologyName" name="technologyName" placeholder="technologyName" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
