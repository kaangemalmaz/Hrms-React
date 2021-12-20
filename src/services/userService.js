import axios from "axios";


export default class UserService{
    findByEmail(email){
        return axios.get("http://localhost:8080/api/users/findByEmail?email=" + email);
    }
}