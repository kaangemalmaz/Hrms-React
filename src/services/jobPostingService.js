import axios from "axios";

export default class JobPostingService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActiveTrue");
    }

    getAllActiveFalse(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActiveFalse");
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobpostings/add", values);
    }
}