import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ViewRecipe from "../Page/ViewRecipe/ViewRecipe";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Blog from "../Page/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
          fetch(
            `https://chef-recipe-server-side-samanta335.vercel.app/data/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
