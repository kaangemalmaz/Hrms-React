import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';

export default function TypeOfWorkTimeUpdate() {

    let typeofworktimeService = new TypeOfWorkTimeService();
    let { id } = useParams();
    const [typeofworktimes, setTypeOfWorkTimes] = useState([]);

    useEffect(() => {
        typeofworktimeService.getById(id).then(result => setTypeOfWorkTimes(result.data.data))
    }, [])

    const initialValue = {
        id: typeofworktimes.id,
        workTimeType: typeofworktimes.workTimeType
    };

    const schema = Yup.object({
        id: Yup.number().required("Required Field"),
        workTimeType: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        typeofworktimeService.update(values);
        toast.success(`${values.workTimeType} başarı ile güncellendi`)
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
                        <AKGTextInput name="workTimeType" placeholder="workTimeType" />
                        <Button color="green" type="submit">Güncelle</Button>
                    </Form>

                </Formik>
        </div>
    )
}
