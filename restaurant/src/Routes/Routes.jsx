import {
    createBrowserRouter,
 } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:'login/',
          element:<Login></Login>
        },
        {
          path:'signup/',
          element:<SignUP></SignUP>
        },
        {
          path:'contact/',
          element:<Contact></Contact>
        },
        {
          path:'blog/',
          element:<Blog></Blog>
        },
        {
          path:'about/',
          element:<About></About>
        }
      ]
    },
  ]);