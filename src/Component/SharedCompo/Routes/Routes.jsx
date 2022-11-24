import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../DashBoard/Seller/AddProduct";
import Dashboard from "../../DashBoard/DashBoard/Dashboard";
import DashboardLanding from "../../DashBoard/DashBoard/DashboardLanding";
import Home from "../../Homepage/Home/Home";
import Errorpage from "../ErrorPage/ErrorPage";
import Main from "./Main";
import MyProduct from "../../DashBoard/Seller/MyProduct";

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
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
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
