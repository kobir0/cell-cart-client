import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        {" "}
        <img src="https://media.tenor.com/OyUVgQi-l-QAAAAC/404.gif" alt="" />
      </div>
      <h1 className="text-2xl font-bold my-5 text-red-500">
        Page you are looking for is not found.
      </h1>
      <NavLink to="/home ">
        <button className="btn btn-success btn-outline btn-wide shadow-lg shadow-teal-100">
          Back To Home{" "}
        </button>
      </NavLink>
    </div>
  );
};

export default Errorpage;
