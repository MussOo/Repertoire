import { Form } from "react-router-dom";
import "./login.scss";
import React from "react";
import { login } from "../../../api/Login";

export default function Login() {
  const LoginAction = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    let email = elements.email.value;
    let password = elements.password.value;
  };

  return (
    <div className="main">
      <div className="container_login">
        <h3>Login</h3>
        <Form method="post">
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit" className="login_button">
            Login
          </button>
          <button className="register_button">Register</button>
        </Form>
      </div>
    </div>
  );
}
