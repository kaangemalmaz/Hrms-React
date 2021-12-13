import axios from "axios";


export default class TypeOfWorkTimeService{
    getAll(){
        return axios.get("http://localhost:8080/api/typeofworktime/getAll");
    }

    add(values){
        return axios.post("http://localhost:8080/api/typeofworktime/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/typeofworktime/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/typeofworktime/delete?id=" + id);
    }

    getById(id){
        return axios.get("http://localhost:8080/api/typeofworktime/getById?id=" + id);
    }
}