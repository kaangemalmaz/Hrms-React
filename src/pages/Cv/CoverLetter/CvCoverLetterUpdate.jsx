import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvService from '../../../services/cvService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvCoverLetterUpdate() {
    let { userid } = useParams();
    let { coverletterid } = useParams();
    const [cvCoverLetter, setCvCoverLetter] = useState([]);
    let cvService = new CvService();

    useEffect(() => {
        cvService.getByIdCvCoverLetter(coverletterid).then(result => setCvCoverLetter(result.data.data))
    }, []);

    const initialValue = {
        coverLetter: cvCoverLetter.coverLetter
    };

    const schema = Yup.object({
        coverLetter: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        let coverLetterUpdDto={
            id : coverletterid,
            candidate : {id : userid},
            coverLetter : values.coverLetter
        }
        cvService.updateCvCoverLetter(coverLetterUpdDto);
        toast.success(`${values.coverLetter} başarı ile güncellendi`)
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
                    <AKGTextInput label="coverLetter" name="coverLetter" placeholder="coverLetter" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
