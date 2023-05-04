import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ViewRecipe from "../Page/ViewRecipe/ViewRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/data/:id",
        element: (
          <PrivateRoute>
            <ViewRecipe></ViewRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
    ],
  },
]);
export default router;
