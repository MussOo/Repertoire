import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    token: localStorage.getItem("token"),
  },
});

export function index() {
  return api.get("/api/repertoire");
}
export function getOne(id) {
  return api
    .get("/api/repertoire/" + id)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
