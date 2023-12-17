import axios from "axios";
import { redirect } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export function login(data) {
  let username = data.username;
  let password = data.password;
  return api
    .post("/api/login", { username, password })
    .then(function (response) {
      console.log("response ok", response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("_id", response.data.user._id);
      }

      return (window.location.href = "/");
    })
    .catch(function (error) {
      console.log(error);
    });
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
