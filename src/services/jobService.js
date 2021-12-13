import axios from "axios";

export default class JobService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobs/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobs/getById?id=" + id);
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobs/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/jobs/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobs/delete?id=" + id);
    }
}