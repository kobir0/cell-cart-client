import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/brands").then((data) => {
      setBrands(data.data.brands);
    });
  }, []);

  return (
    <div className="mx-10 mb-10">
      <h1 className="text-3xl font-bold ">Smartphone Brands For You</h1>
      <div className="grid grid-cols-3 gap-4 m-4">
        {brands?.map((brand) => (
          <NavLink
            key={brand?._id}
            className="  rounded-lg w-full h-20 hover:p-1 hover:shadow-2xl border flex justify-center border-black"
          >
            <img src={brand?.brandImg} className="p-2  h-full" alt=""></img>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Brands;
