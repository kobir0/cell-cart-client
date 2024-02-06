import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Component/SharedCompo/Routes/Routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
};
export default App;
