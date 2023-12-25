import "./App.scss";
import Accueil from "./components/global/accueil/Accueil";
import Login from "./components/authentification/login/Login";
import Register from "./components/authentification/register/Register";
import OneRepertoire from "./components/Repertoire/One/OneRepertoire";
import RepertoireNew from "./components/Repertoire/New/RepertoireNew";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RequireAuth from "./hooks/RequireAuth";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/repertoire",
      loader: RequireAuth,
      children: [
        {
          path: "new",
          element: <RepertoireNew />,
          loader: RequireAuth,
        },
        {
          path: ":id",
          element: <OneRepertoire />,
          loader: RequireAuth,
        },
      ],
    },
    {
      path: "/",
      exact: true,
      index: true,
      element: <Accueil />,
      loader: RequireAuth,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
      action: async ({ request }) => {
        console.log(request.formData());
        return request;
      },
    },
  ]);

  return <RouterProvider router={router} />;
}
