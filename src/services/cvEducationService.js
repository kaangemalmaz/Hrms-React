import axios from "axios";

export default class CvEducationService{
    addCvEducation(values){
        return axios.post("http://localhost:8080/api/cvs/addCvEducation", values);
    }

   
}