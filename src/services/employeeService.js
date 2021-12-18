import axios from "axios";

export default class EmployeeService{
    getAll(){
        return axios.get("http://localhost:8080/api/employee/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employee/getById?id=" + id);
    }

    add(values){
        return axios.post("http://localhost:8080/api/employee/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/employee/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/employee/delete?id=" + id);
    }
}