import "./login.scss";
import { login } from "../../../api/Login";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => login(data);

  return (
    <div className="main">
      <div className="container_login">
        <h3>Login</h3>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: true,
            })}
            placeholder="Username"
          />

          {errors.username?.type === "required" && (
            <p role="alert" className="error_form">
              Username incorrect or invalid
            </p>
          )}
          <input
            type="password"
            {...register("password", { required: true, minLength: 8 })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="error_form">
              Password incorrect or invalid
            </p>
          )}
          <button type="submit" className="login_button">
            Login
          </button>
          <a href="/register" className="register_button">
            Register
          </a>
        </form>
      </div>
    </div>
  );
}
