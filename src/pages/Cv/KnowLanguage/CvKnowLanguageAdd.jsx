import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvLanguageService from '../../../services/cvLanguageService';
import CvService from '../../../services/cvService';
import AKGDropdown2 from '../../../utilities/CustomFormControl/AKGDropdown2';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvKnowLanguageAdd() {

    let { id } = useParams();

    const [cvLanguages, setCvLanguages] = useState([]);

    let cvService = new CvService();
    let cvLanguageService = new CvLanguageService();

    useEffect(() => {
        cvLanguageService.getAll().then((result) => setCvLanguages(result.data.data));
    }, [])

    const initialValue = { languageLevel: '', cvLanguageId: '' };

    const schema = Yup.object({
        languageLevel: Yup.string().required("Field is required!"),
        cvLanguageId: Yup.number().required("Field is required!")
    });

    const onSubmit = (values) => {
        let knowLanguageDto = {
            languageLevel: values.languageLevel,
            candidate: { id: id },
            language: { id: values.cvLanguageId },
        }
        cvService.addCvKnowLanguage(knowLanguageDto);
        toast.success(`${values.languageLevel} başarı ile eklendi`)
        window.location.replace("/candidate/cv/" +id);
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
                onSubmit={onSubmit}
            >
                <Form className="ui form">
                    <AKGDropdown2 label="CvLanguage" name="cvLanguageId" defaultOption="Seçiniz" options={cvLanguageOptions} />
                    <AKGTextInput label="languageLevel" name="languageLevel" placeholder="languageLevel" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
