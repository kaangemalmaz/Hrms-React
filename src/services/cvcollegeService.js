import axios from "axios";

export default class CvCollegeService{
    getAll(){
        return axios.get("http://localhost:8080/api/cvcollege/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/cvcollege/getById?id=" + id);
    }

    add(values){
        return axios.post("http://localhost:8080/api/cvcollege/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/cvcollege/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/cvcollege/delete?id=" + id);
    }
}