import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../DashBoard/Seller/AddProduct";
import Dashboard from "../../DashBoard/DashBoard/Dashboard";
import DashboardLanding from "../../DashBoard/DashBoard/DashboardLanding";
import Home from "../../Homepage/Home/Home";
import Errorpage from "../ErrorPage/ErrorPage";
import Main from "./Main";
import MyProduct from "../../DashBoard/Seller/MyProduct";
import Register from "../../Authentication/Register";
import Login from "../../Authentication/Login";
import Product from "../../ProductPage/Product.jsx/Product";
import PrivateRoute from "../../Authentication/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brands/:id",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <DashboardLanding></DashboardLanding>,
          },
          {
            path: "/dashboard/addProduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/myProduct",
            element: <MyProduct></MyProduct>,
          },
        ],
      },
    ],
  },
]);
export default Routes;
