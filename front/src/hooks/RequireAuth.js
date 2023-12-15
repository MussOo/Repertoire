import { useState } from "react";
import redux from "../redux/reducer";
import { redirect } from "react-router-dom";

export default function RequireAuth() {
  const { incremented, decremented } = redux.actions;
  const store = redux.store;
  if (store.getState().token == undefined) {
    return redirect("/login");
  }
  console.log(store.getState());
  return 0;
}
