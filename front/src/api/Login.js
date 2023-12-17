import axios from "axios";
import { redirect } from "react-router-dom";
const api = axios.create({
  baseURL: "http://localhost:8000",
});

export function login(data) {
  let username = data.username;
  let password = data.password;
  return api.post("/api/login", { username, password });
}
export function inscription(data) {
  let username = data.username;
  let password = data.password;
  return api.post("/api/register", { username, password });
}

export function me() {
  return api
    .get("/api/me", {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return null;
    });
}
