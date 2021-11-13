import axios from "axios";


export default class JobPostingService{
    getAll(){
        return axiosios.get("http://localhost:8080/api/candidates/getAll");
    }
}