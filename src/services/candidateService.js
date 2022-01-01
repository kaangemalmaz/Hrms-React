import axios from "axios";

export default class CandidateService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidates/getAll");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/candidates/getById?id=" + id);
  }

  add(values) {
    return axios.post("http://localhost:8080/api/candidates/add", values);
  }
}
