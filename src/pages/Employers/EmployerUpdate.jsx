import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EmployerService from '../../services/employerService';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';
import EmployerUpdateService from '../../services/employerUpdateService';
import EmployerConfirmationService from '../../services/employerConfirmationService';

export default function EmployerUpdate() {

    let { id } = useParams();
    const [employer, setEmployer] = useState([]);
    let employerService = new EmployerService();
    let employerUpdateService = new EmployerUpdateService();
    let employerConfirmationService = new EmployerConfirmationService();

    useEffect(() => {
        employerService.getById(id).then(result => setEmployer(result.data.data))
    }, []);

    const initialValue = {
        id: employer.id,
        companyName: employer.companyName,
        email: employer.email,
        firmPhone: employer.firmPhone,
        firmWebSite: employer.firmWebSite,
        password: employer.password,
        repassword: employer.repassword
    };

    const schema = Yup.object({
        id: Yup.number().required("Required Field"),
        companyName: Yup.string().required("Required Field."),
        email: Yup.string().required("Required Field."),
        firmPhone: Yup.string().required("Required Field."),
        firmWebSite: Yup.string().required("Required Field."),
        password: Yup.string().required("Required Field."),
        repassword: Yup.string().required("Required Field."),
    });

    const onSubmit = (values) => {
        let employerUpdateDto = {
            employer: { id: id },
            companyName: values.companyName,
            email: values.email,
            firmPhone: values.firmPhone,
            firmWebSite: values.firmWebSite,
            password: values.password,
            repassword: values.repassword,
        }
        employerUpdateService.add(employerUpdateDto);
        let employerConfirmationDto = {
            is_confirmed : false,
            employer: { id: id },
        }
        employerConfirmationService.add(employerConfirmationDto);
        toast.success(`${values.companyName} başarı ile güncellendi`)
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
                    <AKGTextInput label="companyName" name="companyName" placeholder="companyName" />
                    <AKGTextInput label="email" name="email" placeholder="email" />
                    <AKGTextInput label="firmPhone" name="firmPhone" placeholder="firmPhone" />
                    <AKGTextInput label="firmWebSite" name="firmWebSite" placeholder="firmWebSite" />
                    <AKGTextInput label="password" name="password" placeholder="password" />
                    <AKGTextInput label="repassword" name="repassword" placeholder="repassword" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
