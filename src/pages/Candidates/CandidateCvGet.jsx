import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Card } from 'semantic-ui-react';
import CandidateService from '../../services/candidateService';
import CvService from '../../services/cvService';

export default function CandidateCvGet() {
    let { id } = useParams();

    let candidateService = new CandidateService();
    let cvService = new CvService();
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        candidateService.getAllByCandidateId(id).then(result => setCandidates(result.data.data));
    }, []);

    const onCvSovialMediaDel = (values) => {
        cvService.deleteCvSocialMedia(values.id);
        window.location.reload();
        toast.success(`${values.socialUrl} başarı ile silinmiştir.`)
    }

    const onCvTeknologyDel = (values) => {
        cvService.deleteCvTeknology(values.id);
        window.location.reload();
        toast.success(`${values.technologyName} başarı ile silinmiştir.`)
    }

    const onCvCoverLetterDel = (values) => {
        cvService.deleteCvCoverLetter(values.id);
        window.location.reload();
        toast.success(`${values.coverLetter} başarı ile silinmiştir.`)
    }

    const onCvKnowLanguageDel = (values) => {
        cvService.deleteCvKnowLanguage(values.id);
        window.location.reload();
        toast.success(`${values.language.languageName} başarı ile silinmiştir.`)
    }

    const onCvExperinceDel = (values) => {
        cvService.deleteCvExperience(values.id);
        window.location.reload();
        toast.success(`${values.workplaceName} başarı ile silinmiştir.`)
    }

    const onCvEducationDel = (values) => {
        cvService.deleteCvEducation(values.id);
        window.location.reload();
        toast.success(`${values.college?.collegeName} başarı ile silinmiştir.`)
    }

    return (
        <div>
            {/* {console.log(candidates[0]?.)} */}
            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Resim Bilgileri</strong></Card.Content>
                {
                    candidates[0]?.cvImages.map((cvImage) => (
                        <Card.Content key={cvImage.id}>
                            <Card.Description>Resim Url Bilgisi : {cvImage.imageUrl}</Card.Description>
                            <Button basic color='blue'><Link to={"/cv/cvcollege/" + id}>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/cv/cvcollege/" + cvImage.id}>Güncelle</Link></Button>
                            <Button basic color='blue'><Link to={"/cv/cvcollege/" + cvImage.id}>Sil</Link></Button>
                        </Card.Content>
                    ))
                }
            </Card>

            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Deneyimler</strong></Card.Content>
                {
                   
                    candidates[0]?.cvExperiences.map((cvExperience) => (
                        <Card.Content key={cvExperience.id}>
                            <Card.Description> Şirket İsmi : {cvExperience.workplaceName}</Card.Description>
                            <Card.Description> Başlama Tarihi : {cvExperience.workStartedYear}</Card.Description>
                            <Card.Description> Bitiş Tarihi : {cvExperience.workLeftYear ? cvExperience.workLeftYear : "-"}</Card.Description>
                            <Card.Description> Devam ediyor mu? : {cvExperience.isWorking ? "True" : "False"}</Card.Description>
                            <Card.Description> İş Tanımı : {cvExperience.job?.title}</Card.Description>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/addcvexperience"}>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/updcvexperience/" + cvExperience.id}>Güncelle</Link></Button>
                            <Button basic color='blue' onClick={() => onCvExperinceDel(cvExperience)} >Sil</Button>
                        </Card.Content>
                    ))
                }
            </Card>

            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Ön yazı bilgileri</strong></Card.Content>
                {
                    candidates[0]?.cvCoverLetters.map((cvCoverLetter) => (
                        <Card.Content key={cvCoverLetter.id}>
                            <Card.Description>Ön yazı bilgisi : {cvCoverLetter.coverLetter}</Card.Description>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/addcoverletter" }>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/updcoverletter/" + cvCoverLetter.id}>Güncelle</Link></Button>
                            <Button basic color='blue' onClick={() => onCvCoverLetterDel(cvCoverLetter)} >Sil</Button>
                        </Card.Content>
                    ))
                }
            </Card>

            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Sosyal Medya Bilgileri</strong></Card.Content>
                {
                    candidates[0]?.cvSocialMedias.map((cvSocialMedia) => (
                        <Card.Content key={cvSocialMedia.id}>
                            <Card.Description>Sosyal Medya Bilgisi : {cvSocialMedia.socialUrl}</Card.Description>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/addsocialmedia" }>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/updsocialmedia/" + cvSocialMedia.id}>Güncelle</Link></Button>
                            <Button basic color='blue' onClick={() => onCvSovialMediaDel(cvSocialMedia)}>Sil</Button>
                        </Card.Content>
                    ))
                }
            </Card>

            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Bilinen teknolojiler</strong></Card.Content>
                {
                    candidates[0]?.cvTeknologies.map((cvTeknologie) => (
                        <Card.Content key={cvTeknologie.id}>
                            <Card.Description>Bilinen teknolojiler : {cvTeknologie.technologyName}</Card.Description>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/addteknology" }>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/updteknology/" + cvTeknologie.id}>Güncelle</Link></Button>
                            <Button basic color='blue' onClick={() => onCvTeknologyDel(cvTeknologie)} >Sil</Button>
                        </Card.Content>
                    ))
                }
            </Card>

            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Eğitim Bilgileri</strong></Card.Content>
                {
                    candidates[0]?.cvEducations.map((cvEducation) => (
                        <Card.Content key={cvEducation.id}>
                            <Card.Description>Eğitime başladı yıl : {cvEducation.collegeStartedYear}</Card.Description>
                            <Card.Description>Mezun olunan yıl : {cvEducation.collegeGraduatedYear}</Card.Description>
                            <Card.Description>Mezun oldu mu ? : {cvEducation.isGraduated ? "True" : "False"}</Card.Description>
                            <Card.Description>Fakülte ismi : {cvEducation.collegeDepartment.collegeDepartmentName}</Card.Description>
                            <Card.Description>Üniversite ismi : {cvEducation.college.collegeName}</Card.Description>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/addcveducation" }>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/updcveducation/" + cvEducation.id}>Güncelle</Link></Button>
                            <Button basic color='blue' onClick={() => onCvEducationDel(cvEducation)} >Sil</Button>
                        </Card.Content>
                    ))
                }
            </Card>

            <Card fluid>
                {/* eğer direk okuyorsan ? koymadan kabul etmiyor unutma! */}
                <Card.Content><strong>Dil Bilgileri</strong></Card.Content>
                {
                    candidates[0]?.cvKnowLanguages.map((cvKnowLanguage) => (
                        <Card.Content key={cvKnowLanguage.id}>
                            <Card.Description>Dil Seviyesi : {cvKnowLanguage.languageLevel}</Card.Description>
                            <Card.Description>Dil İsmi : {cvKnowLanguage.language.languageName}</Card.Description>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/addcvknowlanguage" }>Ekle</Link></Button>
                            <Button basic color='blue'><Link to={"/candidate/cv/" + id + "/updcvknowlanguage/" + cvKnowLanguage.id}>Güncelle</Link></Button>
                            <Button basic color='blue' onClick={() => onCvKnowLanguageDel(cvKnowLanguage)}>Sil</Button>
                        </Card.Content>
                    ))
                }
            </Card>
        </div>
    )
}
