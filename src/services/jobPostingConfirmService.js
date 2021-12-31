import axios from "axios";

export default class JobPostingConfirmService{
    update(values){
        return axios.put("http://localhost:8080/api/jobpostingconfirmation/update", values);
    }
}