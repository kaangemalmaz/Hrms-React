import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import TypeOfWorkService from '../../services/typeOfWorkService';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';

export default function TypeOfWorkUpdate() {

    let typeofworkService = new TypeOfWorkService();
    let { id } = useParams();
    const [typeofworks, setTypeOfWorks] = useState([]);

    useEffect(() => {
        typeofworkService.getById(id).then(result => setTypeOfWorks(result.data.data))
    }, [])

    const initialValue = {
        id: "",
        workType: ""
    };

    const schema = Yup.object({
        id: Yup.number().required("Required Field"),
        workType: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        typeofworkService.update(values);
        toast.success(`${values.workType} başarı ile güncellendi`)
    }

    return (
        <div>
            <div>
                <Formik
                    initialValues={initialValue}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >

                    <Form className="ui form">
                        {/* <input type="hidden" name="id" /> */}
                        <AKGTextInput name="workType" placeholder="workType" />
                        <Button color="green" type="submit">Güncelle</Button>
                    </Form>

                </Formik>
            </div>
        </div>
    )
}
