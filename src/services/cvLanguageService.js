import axios from "axios";

export default class CvLanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/languages/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/languages/getById?id=" + id);
    }

    add(values){
        return axios.post("http://localhost:8080/api/languages/add", values);
    }

    update(values){
        return axios.put("http://localhost:8080/api/languages/update", values);
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/languages/delete?id=" + id);
    }
}