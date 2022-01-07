import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CvLanguageService from '../../../services/cvLanguageService';
import CvService from '../../../services/cvService';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import AKGDropdown2 from '../../../utilities/CustomFormControl/AKGDropdown2';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';
import { Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';

export default function CvKnowLanguageUpdate() {

    let { userid } = useParams();
    let { knowlanguageid } = useParams();

    const [cvLanguages, setCvLanguages] = useState([]);
    const [cvKnowLanguage, setCvKnowLanguage] = useState([]);

    let cvService = new CvService();
    let cvLanguageService = new CvLanguageService();

    useEffect(() => {
        cvLanguageService.getAll().then((result) => setCvLanguages(result.data.data));
        cvService.getByIdCvKnowLanguage(knowlanguageid).then((result) => setCvKnowLanguage(result.data.data));
    }, [])

    const initialValue = {
        id : cvKnowLanguage.id,
        languageLevel: cvKnowLanguage.languageLevel,
        cvLanguageId: cvKnowLanguage.language?.id
    };

    const schema = Yup.object({
        languageLevel: Yup.string().required("Field is required!"),
        cvLanguageId: Yup.number().required("Field is required!")
    });

    const onSubmit = (values) => {
        let knowLanguageUpdDto = {
            id : values.id,
            languageLevel: values.languageLevel,
            candidate: { id: userid },
            language: { id: values.cvLanguageId },
        }
        cvService.updateCvKnowLanguage(knowLanguageUpdDto);
        toast.success(`${values.languageLevel} başarı ile eklendi`)
        window.location.replace("/candidate/cv/" + userid);
    };

    const cvLanguageOptions = cvLanguages.map((cvLanguage, index) => ({
        key: index,
        text: cvLanguage.languageName,
        value: cvLanguage.id
    }))

    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={schema}
                enableReinitialize
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <input type="hidden" name="id" />
                    <AKGDropdown2 label="CvLanguage" name="cvLanguageId" options={cvLanguageOptions} />
                    <AKGTextInput label="languageLevel" name="languageLevel" placeholder="languageLevel" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
