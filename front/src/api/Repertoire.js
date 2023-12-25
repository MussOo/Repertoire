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
  return api.get("/api/repertoire/" + id);
}

export function insert(data) {
  return api.post("/api/repertoire", data);
}
export function deleta(id) {
  return api.delete("/api/repertoire/" + id);
}
