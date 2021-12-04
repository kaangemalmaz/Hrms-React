import axios from "axios";

export default class JobPostingService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActiveTrue");
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobpostings/add", values);
    }
}