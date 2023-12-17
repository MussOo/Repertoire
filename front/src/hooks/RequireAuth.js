import { me } from "../api/Login";

export default async function RequireAuth() {
  let data = await me();
  let result = false;

  if (data) {
    if (localStorage.getItem("_id") === data._id) {
      result = true;
    }
  }

  if (result == false) {
    localStorage.clear();
    window.location.href = "/login";
  }
  return 0;
}
