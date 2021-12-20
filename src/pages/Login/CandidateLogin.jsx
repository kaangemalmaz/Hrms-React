import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import AKGTextInput from '../../utilities/CustomFormControl/AKGTextInput'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import UserService from '../../services/userService'

export default function CandidateLogin() {

    let userService = new UserService();
    const [user, setUser] = useState([]);

    const initialValue = { email: "", password: "" }

    const schema = Yup.object({
        email: Yup.string().required("Field is required."),
        password: Yup.string().required("Field is required."),
    })

    const onSubmit = (values) => {
        userService.findByEmail(values.email).then(result=> setUser(result.data.data));
        if (user.email === values.email && user.password === values.password) {
            toast.success(`${values.email} başarı ile giriş yapılmıştır.`)
        }
        else {
            toast.error(`${values.email} adresinizi veya şifrenizi kontrol ediniz.`)
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
                    <Button color='olive' type="submit">Giriş</Button>
                </Form>
            </Formik>
        </div>
    )
}
