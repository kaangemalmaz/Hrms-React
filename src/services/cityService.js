import axios from "axios";

export default class CityService{
    getAll(){
        return axios.get("http://localhost:8080/api/cities/getAll");
    }

    add(values){
        return axios.post("http://localhost:8080/api/cities/add", values);
    }
}