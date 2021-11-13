import axios from "axios";

export default class JobService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobs/getAll");
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobs/add" + values);
    }

    update(values){
        return axios.post("http://localhost:8080/api/jobs/add" + values);
    }
}