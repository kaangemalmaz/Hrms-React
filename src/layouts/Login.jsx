import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import CandidateService from '../services/candidateService';
import EmployeeService from '../services/employeeService';
import EmployerService from '../services/employerService';
import UserService from '../services/userService';
import AKGTextInput from '../utilities/CustomFormControl/AKGTextInput';

export default function Login() {
    let userService = new UserService();
    let employeeService = new EmployeeService();
    let employerService = new EmployerService();
    let candidateService = new CandidateService();

    const [user, setUser] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [employer, setEmployer] = useState([]);
    const [candidate, setCandidate] = useState([]);

    const initialValue = { email: "", password: "" }

    const schema = Yup.object({
        email: Yup.string().required("Field is required."),
        password: Yup.string().required("Field is required."),
    })

    const onSubmit = (values) => {
        userService.findByEmail(values.email).then(result => setUser(result.data.data));
        if (user.email === values.email && user.password === values.password) {
            toast.success(`${values.email} başarı ile giriş yapılmıştır.`)

            employeeService.getById(user.id).then(result => setEmployee(result.data));
            console.log(employee);
            if (employee.success) {
                window.location.replace("/employeeLogin/" + user.id);
                //{<Link to={"/employeeLogin/" + user.id}>Güncelle</Link>}
                // <Button primary as={NavLink} to={"/employeeLogin/" + user.id} >Onayla</Button>
                //<Button basic color='red' onClick={onUrl()} as={NavLink} to={"/employeeLogin/" + user.id}>Sil</Button>
            }

            employerService.getById(user.id).then(result => setEmployer(result.data));
            if (employer.success) {
                window.location.replace("/employerLogin/" + user.id);
            }

            candidateService.getById(user.id).then(result => setCandidate(result.data));
            if (candidate.success) {
                window.location.replace("/candidateLogin/" + user.id);
            }
        }
        else {
            toast.error(`${values.email} adresinizi veya şifrenizi kontrol ediniz.`, 1)
        }
    }



    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                <Form className='ui form'>
                    <AKGTextInput name='email' label="Email" placeholder='joe@schmoe.com' />
                    <AKGTextInput name='password' label="Password" placeholder='' />
                    <Button color='blue' type="submit">Giriş</Button>
                </Form>
            </Formik>
        </div>
    )

}
