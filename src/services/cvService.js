import axios from "axios";

export default class CvService{

    //social Media//
    addCvSocialMedia(values){
        return axios.post("http://localhost:8080/api/cvs/addCvSocialMedia", values);
    }
    deleteCvSocialMedia(id){
        return axios.delete("http://localhost:8080/api/cvs/deleteCvSocialMedia?id=" + id);
    }
    updateCvSocialMedia(values){
        return axios.put("http://localhost:8080/api/cvs/updateCvSocialMedia" , values);
    }
    getByIdCvSocialMedia(id){
        return axios.get("http://localhost:8080/api/cvs/getByIdCvSocialMedia?id=" + id);
    }
    //social Media//


    //cvTeknology//
    addCvTeknology(values){
        return axios.post("http://localhost:8080/api/cvs/addCvTeknology", values);
    }
    deleteCvTeknology(id){
        return axios.delete("http://localhost:8080/api/cvs/deleteCvTeknology?id=" + id);
    }
    updateCvTeknology(values){
        return axios.put("http://localhost:8080/api/cvs/updateCvTeknology" , values);
    }
    getByIdCvTeknology(id){
        return axios.get("http://localhost:8080/api/cvs/getByIdCvTeknology?id=" + id);
    }
    //cvTeknology//

    //cvCoverLetter//
    addCvCoverLetter(values){
        return axios.post("http://localhost:8080/api/cvs/addCvCoverLetter", values);
    }
    deleteCvCoverLetter(id){
        return axios.delete("http://localhost:8080/api/cvs/deleteCvCoverLetter?id=" + id);
    }
    updateCvCoverLetter(values){
        return axios.put("http://localhost:8080/api/cvs/updateCvCoverLetter" , values);
    }
    getByIdCvCoverLetter(id){
        return axios.get("http://localhost:8080/api/cvs/getByIdCvCoverLetter?id=" + id);
    }
    //cvCoverLetter//

    //cvKnowLanguage//
    addCvKnowLanguage(values){
        return axios.post("http://localhost:8080/api/cvs/addCvKnowLanguage", values);
    }
    deleteCvKnowLanguage(id){
        return axios.delete("http://localhost:8080/api/cvs/deleteCvKnowLanguage?id=" + id);
    }
    updateCvKnowLanguage(values){
        return axios.put("http://localhost:8080/api/cvs/updateCvKnowLanguage" , values);
    }
    getByIdCvKnowLanguage(id){
        return axios.get("http://localhost:8080/api/cvs/getByIdCvKnowLanguage?id=" + id);
    }
    //cvKnowLanguage//

    //CvExperience//
    addCvExperience(values){
        return axios.post("http://localhost:8080/api/cvs/addCvExperience", values);
    }
    deleteCvExperience(id){
        return axios.delete("http://localhost:8080/api/cvs/deleteCvExperience?id=" + id);
    }
    updateCvExperience(values){
        return axios.put("http://localhost:8080/api/cvs/updateCvExperience" , values);
    }
    getByIdCvExperience(id){
        return axios.get("http://localhost:8080/api/cvs/getByIdCvExperience?id=" + id);
    }
    //CvExperience//
}