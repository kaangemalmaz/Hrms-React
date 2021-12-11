import axios from "axios";


export default class TypeOfWorkService{
    getAll(){
        return axios.get("http://localhost:8080/api/typeofwork/getAll");
    }

    add(values){
        return axios.post("http://localhost:8080/api/typeofwork/add", values);
    }

    update(values){
        return axios.post("http://localhost:8080/api/typeofwork/update", values);
    }

    delete(values){
        return axios.post("http://localhost:8080/api/typeofwork/delete", values);
    }

    getById(id){
        return axios.get("http://localhost:8080/api/typeofwork/getById?id=" + id);
    }
}