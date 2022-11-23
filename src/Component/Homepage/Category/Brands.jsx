import React from "react";
import { NavLink } from "react-router-dom";

const Brands = () => {
  return (
    <div className="mx-10 mb-10">
      <h1 className="text-3xl font-bold ">Smartphone Brands For You</h1>
      <div className="grid grid-cols-3 gap-4 m-4">
        <NavLink className="  rounded-lg w-full h-20 hover:p-1 hover:shadow-2xl border flex justify-center border-black">
          <img
            src="https://i.ibb.co/b64Gtmw/pngegg-1.png"
            className="p-2  h-full"
            alt=""
          ></img>
        </NavLink>
        <NavLink className="  rounded-lg w-full h-20  hover:shadow-2xl hover:p-1 border flex justify-center border-black">
          <img
            src="https://i.ibb.co/3zFWF2G/99-998528-oneplus-bw-icon-oneplus-6-logo-png-removebg-preview-1.png"
            className="p-2  h-full"
            alt=""
          ></img>
        </NavLink>
        <NavLink className="  rounded-lg w-full h-20 hover:shadow-2xl hover:p-1 border flex justify-center border-black">
          <img
            src="https://i.ibb.co/JHdXRDb/pngegg-2.png"
            className="p-2  h-full"
            alt=""
          ></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Brands;
