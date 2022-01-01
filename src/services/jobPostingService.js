import axios from "axios";

export default class JobPostingService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActiveTrue");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobpostings/getById?id=" + id);
    }

    getAllActiveFalse(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActiveFalse");
    }

    getAllActiveTrue(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActiveTrue");
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobpostings/add", values);
    }
}