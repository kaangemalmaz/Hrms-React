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

    
}