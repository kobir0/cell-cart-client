import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5001/brands").then((data) => {
      setBrands(data?.data?.brands);
      setLoading(false);
    });
  }, []);
  // if (brands.length) {
  //   setLoading(false);
  // }

  return (
    <div className="mx-10 mb-10">
      <h1 className="text-3xl font-bold ">Smartphone Brands For You</h1>

      <div className="grid grid-cols-3 gap-4 m-4">
        {loading ? (
          <>
            {" "}
            <h1 className="btn btn-outline btn-xl text-sm lg:text-base  h-20 font-semibold text-center">
              Loading Buttons....
            </h1>
            <h1 className="btn btn-outline btn-xl  h-20 font-semibold text-center">
              Loading Buttons....
            </h1>
            <h1 className="btn btn-outline btn-xl  h-20 font-semibold text-center">
              Loading Buttons....
            </h1>
          </>
        ) : (
          brands?.map((brand) => (
            <NavLink
              key={brand?._id}
              to={`/brands/${brand?.brandId}`}
              className="  rounded-lg w-full h-20 hover:p-1 hover:shadow-2xl border flex justify-center border-black"
            >
              <img src={brand?.brandImg} className="p-2  h-full" alt=""></img>
            </NavLink>
          ))
        )}

        {/* {brands?.map((brand) => (
          <NavLink
            key={brand?._id}
            to={`/brands/${brand?.brandId}`}
            className="  rounded-lg w-full h-20 hover:p-1 hover:shadow-2xl border flex justify-center border-black"
          >
            <img src={brand?.brandImg} className="p-2  h-full" alt=""></img>
          </NavLink>
        ))} */}
      </div>
    </div>
  );
};

export default Brands;
