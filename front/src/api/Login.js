import axios from "axios";

axios.defaults = {
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
};

export function login(email, password) {
  return axios
    .post("/api/login", { email, password })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
