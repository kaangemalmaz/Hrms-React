import axios from "axios";

export default class EmployerConfirmationService {
  getAll() {
    return axios.get("http://localhost:8080/api/employerConfirmation/getAll");
  }

  findByisConfirmedFalse() {
    return axios.get("http://localhost:8080/api/employerConfirmation/findByisConfirmedFalse");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/employerConfirmation/getById?id=" + id);
  }

  add(values) {
    return axios.post("http://localhost:8080/api/employerConfirmation/add", values);
  }

  update(values) {
    return axios.put("http://localhost:8080/api/employerConfirmation/update", values);
  }

}
