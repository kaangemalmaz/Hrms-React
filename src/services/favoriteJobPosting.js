import axios from "axios";

export default class FavoriteJobPosting {

  getBycandidateId(id) {
    return axios.get("http://localhost:8080/api/favoriteJobPosting/getBycandidateId?id=" + id);
  }

  add(values) {
    return axios.post("http://localhost:8080/api/favoriteJobPosting/add", values);
  }
  
}
