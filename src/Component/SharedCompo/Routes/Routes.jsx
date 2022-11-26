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
import AllSeller from "../../DashBoard/Admin/AllSeller";
import AllBuyers from "../../DashBoard/Admin/AllBuyers";
import AdminRoute from "../../Authentication/AdminRoute";
import SellerRoute from "../../Authentication/SellerRoute";
import Blog from "../../Homepage/BlogPage/Blog";
import ReportedProduct from "../../DashBoard/Admin/ReportedProduct";

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
        path: "/blog",
        element: <Blog></Blog>,
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
            element: (
              <SellerRoute>
                <AddProduct></AddProduct>
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/myProduct",
            element: (
              <SellerRoute>
                <MyProduct></MyProduct>
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/allSellers",
            element: (
              <AdminRoute>
                <AllSeller></AllSeller>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/reported",
            element: (
              <AdminRoute>
                <ReportedProduct></ReportedProduct>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allBuyers",
            element: (
              <AdminRoute>
                <AllBuyers></AllBuyers>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
export default Routes;
