import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmployerService from '../../services/employerService';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';

export default function EmployeeUpdate() {

    let { id } = useParams();
    const [employee, setEmployee] = useState([]);
    let employeeService = new EmployerService();

    useEffect(() => {
        employeeService.getById(id).then(result => setEmployee(result.data.data))
    }, []);

    const initialValue = {
        id: employee.id,
        name: employee.name,
        surname: employee.surname,
        email: employee.email,
        title: employee.title,
        password: employee.password,
        repassword: employee.repassword,
    };

    const schema = Yup.object({
        id: Yup.number().required("Required Field"),
        name: Yup.string().required("Required Field."),
        surname: Yup.string().required("Required Field"),
        email: Yup.string().required("Required Field."),
        title: Yup.string().required("Required Field"),
        password: Yup.string().required("Required Field."),
        repassword: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        employeeService.update(values);
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
                    <AKGTextInput name="surname" placeholder="surname" />
                    <AKGTextInput name="email" placeholder="email" />
                    <AKGTextInput name="title" placeholder="title" />
                    <AKGTextInput name="password" placeholder="password" />
                    <AKGTextInput name="repassword" placeholder="repassword" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
