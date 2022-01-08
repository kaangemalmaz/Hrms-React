import axios from "axios";

export default class JobPostingService {
  getAll() {
    return axios.get(
      "http://localhost:8080/api/jobpostings/findByIsActiveTrue"
    );
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/jobpostings/getById?id=" + id);
  }

  getAllActiveFalse() {
    return axios.get(
      "http://localhost:8080/api/jobpostings/findByIsActiveFalse"
    );
  }

  getAllActiveTrue() {
    return axios.get(
      "http://localhost:8080/api/jobpostings/findByIsActiveTrue"
    );
  }

  add(values) {
    return axios.post("http://localhost:8080/api/jobpostings/add", values);
  }

  getBycityId(cityId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getBycityId?cityId=" + cityId
    );
  }

  getBytypeOfWorkTimeId(typeOfWorkTimeId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getBytypeOfWorkTimeId?typeOfWorkTimeId=" +
        typeOfWorkTimeId
    );
  }

  getBycityIdAndtypeOfWorkTimeId(cityId, typeOfWorkTimeId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getBycityIdAndtypeOfWorkTimeId?cityId=" +cityId +
        "&typeOfWorkTimeId=" +typeOfWorkTimeId
    );
  }

  getAllActiveOnesByPage(pageNo, pageSize) {
    return axios.get("http://localhost:8080/api/jobpostings/getAllActiveOnesByPage?pageNo=" + pageNo + "&pageSize=" + pageSize);
  }
  
}
