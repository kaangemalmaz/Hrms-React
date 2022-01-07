import React from 'react'
import * as Yup from "yup";
import { toast } from 'react-toastify';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import CvService from '../../../services/cvService';


export default function CvSocialMediaAdd() {
    
    let { id } = useParams();
    let cvService = new CvService();
    
    const initialValue = { socialUrl: '' };

    const schema = Yup.object({
        socialUrl: Yup.string().required("Field is required."),
    });

    const onSubmit = (values) => {
        let socialMediaDto = {
            candidate: { id: id },
            socialUrl: values.socialUrl,
        }
        cvService.addCvSocialMedia(socialMediaDto);
        toast.success(`${values.socialUrl} başarı ile eklendi`)
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
                    <AKGTextInput label="socialUrl" name="socialUrl" placeholder="socialUrl" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
