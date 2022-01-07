import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import CvService from '../../../services/cvService';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import * as Yup from "yup";

export default function CvTeknologyUpdate() {
    let { userid } = useParams();
    let { teknologyid } = useParams();
    const [cvTeknology, setCvTeknology] = useState([]);
    let cvService = new CvService();

    useEffect(() => {
        cvService.getByIdCvTeknology(teknologyid).then(result => setCvTeknology(result.data.data))
    }, []);

    const initialValue = {
        technologyName: cvTeknology.technologyName
    };

    const schema = Yup.object({
        technologyName: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        let teknologyUpdDto={
            id : teknologyid,
            candidate : {id : userid},
            technologyName : values.technologyName
        }
        cvService.updateCvTeknology(teknologyUpdDto);
        toast.success(`${values.technologyName} başarı ile güncellendi`)
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
                    <AKGTextInput label="technologyName" name="technologyName" placeholder="technologyName" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
