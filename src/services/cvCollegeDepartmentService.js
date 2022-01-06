import axios from "axios";

export default class CvCollegeDepartmentService{
    getAll(){
        return axios.get("http://localhost:8080/api/cvcollegedepartment/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/cvcollegedepartment/getById?id=" + id);
    }

    add(values){
        return axios.post("http://localhost:8080/api/cvcollegedepartment/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/cvcollegedepartment/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/cvcollegedepartment/delete?id=" + id);
    }
}