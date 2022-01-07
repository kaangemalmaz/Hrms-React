import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CvCollegeDepartmentService from '../../../services/cvCollegeDepartmentService';
import CvCollegeService from '../../../services/cvcollegeService';
import CvService from '../../../services/cvService';
import AKGCheckbox from '../../../utilities/CustomFormControl/AKGCheckbox';
import AKGDropdown2 from '../../../utilities/CustomFormControl/AKGDropdown2';
import AKGTextInput from '../../../utilities/CustomFormControl/AKGTextInput';

export default function CvEducationUpdate() {

    let { userid } = useParams();
    let { educationid } = useParams();

    const [cvEducation, setCvEducation] = useState([]);
    const [cvColleges, setCvColleges] = useState([]);
    const [cvCollege, setCvCollege] = useState({});
    const [cvCollegeDepartmans, setCvCollegeDepartmans] = useState([]);

    let cvService = new CvService();
    let cvCollegeService = new CvCollegeService();
    let cvCollegeDepartmentService = new CvCollegeDepartmentService();

    useEffect(() => {
        cvService.getByIdCvEducation(educationid).then(result => setCvEducation(result.data.data));
        cvCollegeService.getAll().then((result) => setCvColleges(result.data.data));
        cvCollegeDepartmentService.getAll().then((result) => setCvCollegeDepartmans(result.data.data));
    }, []);

    const initialValue = {
        id: cvEducation.id,
        collegeStartedYear: cvEducation.collegeStartedYear,
        collegeGraduatedYear: cvEducation.collegeGraduatedYear,
        isGraduated: cvEducation.isGraduated,
        collegeId: cvEducation.college?.id,
        collegeDepartmentId: cvEducation.collegeDepartment?.id,
    };

    const schema = Yup.object({
        collegeStartedYear: Yup.string().required("Field is required!"),
        collegeGraduatedYear: Yup.string().required("Field is required!"),
        isGraduated: Yup.boolean().required("Field is required!"),
        collegeId: Yup.number().required("Field is required!"),
        collegeDepartmentId: Yup.number().required("Field is required!"),
    });

    const cvCollegeOptions = cvColleges.map((cvCollege, index) => ({
        key: index,
        text: cvCollege.collegeName,
        value: cvCollege.id
    }))

    const cvCollegeDepartmanOptions = cvCollegeDepartmans.map((cvCollegeDepartman, index) => ({
        key: index,
        text: cvCollegeDepartman.collegeDepartmentName,
        value: cvCollegeDepartman.id
    }))

    const onSubmit = (values) => {
        cvCollegeService.getById(values.collegeId).then(result => setCvCollege(result.data.data));
        let educationUpdDto = {
            id: educationid,
            collegeStartedYear: values.collegeStartedYear,
            collegeGraduatedYear: values.collegeGraduatedYear,
            isGraduated: values.isGraduated,
            candidate: { id: userid },
            college: { id: values.collegeId },
            collegeDepartment: { id: values.collegeDepartmentId },
        }
        cvService.updateCvEducation(educationUpdDto);
        toast.success(`${cvCollege.collegeName} başarı ile güncellendi!`)
        window.location.replace("/candidate/cv/" + userid);
    };

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
                    <AKGTextInput label="collegeStartedYear" name="collegeStartedYear" placeholder="collegeStartedYear" />
                    <AKGTextInput label="collegeGraduatedYear" name="collegeGraduatedYear" placeholder="collegeGraduatedYear" />
                    {/* <AKGTextInput label="isGraduated" name="isGraduated" placeholder="isGraduated" /> */}
                    <AKGCheckbox name="isGraduated" label='Mezun oldu mu?' />
                    <AKGDropdown2 label="College" name="collegeId" defaultOption="Seçiniz" options={cvCollegeOptions} />
                    <AKGDropdown2 label="CollegeDepartment" name="collegeDepartmentId" defaultOption="Seçiniz" options={cvCollegeDepartmanOptions} />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
