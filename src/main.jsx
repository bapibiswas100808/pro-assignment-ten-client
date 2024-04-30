import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllCraft from "./Components/AllCraft/AllCraft";
import AddCraft from "./Components/AddCraft/AddCraft";
import CraftList from "./Components/CraftList/CraftList";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Root from "./Root";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ShowDetails from "./Components/ShowDetails/ShowDetails";
import UpdateCraft from "./UpdateCraft/UpdateCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allcraft"),
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("http://localhost:5000/allcraft"),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/craftList/",
        element: (
          <PrivateRoute>
            <CraftList></CraftList>
          </PrivateRoute>
        ),
      },
      {
        path: "/showDetails/:id",
        element: (
          <PrivateRoute>
            <ShowDetails></ShowDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allcraft/${params.id}`),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allcraft/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
