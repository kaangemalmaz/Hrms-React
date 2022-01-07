import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CvService from '../../../services/cvService';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';

export default function CvSocialMediaUpdate() {

    let { userid } = useParams();
    let { socialid } = useParams();
    const [cvSocialMedia, setCvSocialMedia] = useState([]);
    let cvService = new CvService();

    useEffect(() => {
        cvService.getByIdCvSocialMedia(socialid).then(result => setCvSocialMedia(result.data.data))
    }, []);

    const initialValue = {
        socialUrl: cvSocialMedia.socialUrl
    };

    const schema = Yup.object({
        socialUrl: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        let socialMediaUpdDto={
            id : socialid,
            candidate : {id : userid},
            socialUrl : values.socialUrl
        }
        cvService.updateCvSocialMedia(socialMediaUpdDto);
        toast.success(`${values.socialUrl} başarı ile güncellendi`)
        window.location.replace("/candidate/cv/" + userid);
    }

    return (
        <div>
            <Formik
                    initialValues={initialValue}
                    enableReinitialize
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                <Form className="ui form">
                    <input type="hidden" name="id" />
                    <AKGTextInput label="socialUrl" name="socialUrl" placeholder="socialUrl" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
