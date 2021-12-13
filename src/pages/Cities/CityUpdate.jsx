import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CityService from '../../services/cityService';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';

export default function CityUpdate() {
    
    let { id } = useParams();
    const [city, setCity] = useState([]);
    let cityService = new CityService();

    useEffect(() => {
        cityService.getById(id).then(result => setCity(result.data.data))
    }, [])

    const initialValue = {
        id: city.id,
        name: city.name
    };

    const schema = Yup.object({
        id: Yup.number().required("Required Field"),
        name: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        cityService.update(values);
        toast.success(`${values.name} başarı ile güncellendi`)
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
                    <AKGTextInput name="name" placeholder="name" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
