import axios from "axios";

export default class EmployerService {
  getAll() {
    return axios.get("http://localhost:8080/api/employers/getAll");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/employers/getById?id=" + id);
  }

  add(values) {
    return axios.post("http://localhost:8080/api/employers/add", values);
  }

  update(values) {
    return axios.put("http://localhost:8080/api/employers/update", values);
  }

}
