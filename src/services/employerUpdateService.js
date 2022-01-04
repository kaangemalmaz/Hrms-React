import axios from "axios";

export default class EmployerUpdateService {
  getAll() {
    return axios.get("http://localhost:8080/api/employerUpdate/getAll");
  }

  findByactiveTrue() {
    return axios.get("http://localhost:8080/api/employerUpdate/findByactiveTrue");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/employerUpdate/getById?id=" + id);
  }
  
  getByEmployerCountActiveTrue(id) {
    return axios.get("http://localhost:8080/api/employerUpdate/getByEmployerCountActiveTrue?employerId=" + id);
  }

  add(values) {
    return axios.post("http://localhost:8080/api/employerUpdate/add", values);
  }

  update(values) {
    return axios.put("http://localhost:8080/api/employerUpdate/update", values);
  }

}
