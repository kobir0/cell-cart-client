import { createBrowserRouter } from "react-router-dom";
import Home from "../../Homepage/Home/Home";
import Main from "./Main";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);
export default Routes;
