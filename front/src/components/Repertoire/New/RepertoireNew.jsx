import React, { useState, useEffect } from "react";
import "./repertoire.scss";
import { useForm } from "react-hook-form";
import { insert } from "../../../api/Repertoire";

import { ToastContainer, toast } from "react-toastify";

export default function Repertoire() {
  const success = () => toast("Contact ajouté", { type: "success" });
  const error = () => toast("une erreur est survenue", { type: "error" });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    let repertoire = {
      name: e.name,
      numero: e.numero,
      email: e.email ?? null,
    };

    insert(repertoire)
      .then((res) => {
        if (res.status === 200) {
          success();
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }
      })
      .catch((err) => {
        error();
        console.log(err);
      });
  };

  return (
    <div className="main">
      <h1>Repertoire</h1>

      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("name", {
            required: true,
          })}
          placeholder="name"
        />
        <input
          {...register("numero", {
            required: true,
          })}
          placeholder="Numero"
        />
        <input
          {...register("email", { required: false })}
          placeholder="Email"
        />
        <input type="submit" />
      </form>
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
    </div>
  );
}
