import axios from "axios";

export default class CityService{
    getAll(){
        return axios.get("http://localhost:8080/api/cities/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/cities/getById?id=" + id);
    }

    add(values){
        return axios.post("http://localhost:8080/api/cities/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/cities/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/cities/delete?id=" + id);
    }
}