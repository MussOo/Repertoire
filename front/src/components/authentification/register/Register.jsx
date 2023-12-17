import "./register.scss";
import { inscription } from "../../../api/Login";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const success = () => toast("utilisateur creer", { type: "success" });
  const error = () => toast("une erreur est survenue", { type: "error" });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    inscription(data)
      .then((res) => {
        if (res.status === 201) {
          success();
          setTimeout(() => {
            window.location.href = "/login";
          }, 5000);
        }
      })
      .catch((err) => {
        error();
        console.log(err);
      });
  };

  return (
    <div className="main">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container_login">
        <h3>Register</h3>
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
