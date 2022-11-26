import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProductCard = ({ product }) => {
  const {
    brandName,
    condition,
    contactNumber,
    image,
    location,
    model,
    originalPrice,
    sellingPrice,
    status,
    time,
    usedYear,
    userImg,
    userName,
    email,
    sellingReason,
  } = product;

  const url = `http://localhost:5000/users/${email}`;
  const { data: user = [] } = useQuery({
    queryKey: ["users", email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.user;
    },
  });

  return (
    <div className="m-5">
      <div className="hero   bg-base-200">
        <div className=" ">
          <img className="max-w-full" src={image} alt="" />
          <div className="m-3">
            <div className="flex">
              <div className="avatar mt-2">
                <div className="w-12 h-12 rounded-full">
                  <img src={userImg} alt="" />
                </div>
              </div>
              <div>
                <div className=" mx-2">
                  <div className="flex">
                    <h1 className="text-lg font-semibold">{userName}</h1>
                    {user?.varified && (
                      <img
                        src="https://i.ibb.co/QJRDkd3/Blue-check-mark-icon-on-transparent-background-PNG.png"
                        className=" w-5 h-5 mt-1"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <h1 className="text-xs mx-2 my-0 text-slate-500 ">{time}</h1>
                <h1 className="text-xs mx-2 my-0 text-slate-500 ">
                  {product?.date}
                </h1>
              </div>
            </div>
            <h1 className="text-xl font-bold">
              {brandName} {model}
            </h1>
            <h1 className="text-xl font-bold">Price: $ {sellingPrice}</h1>
            <h1 className=" text-lg  font-semibold">Status: {status}</h1>

            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-slate-100 rounded-box"
            >
              <div className="collapse-title  font-medium">
                See Others Information About This Product
              </div>
              <div className="collapse-content">
                <div>
                  <h1>Condition : {condition}</h1>
                  <h1>Year Of Used : {usedYear}</h1>

                  <h1>Original Price : ${originalPrice}</h1>
                  <h1> Description or Selling Reason: {sellingReason}</h1>
                </div>
                <h1 className="text-lg mt-3 font-semibold">
                  Contact Information:
                </h1>
                <h1 className=" text-base font-semibold">
                  Phone Number: {contactNumber}
                </h1>
                <h1 className=" text-base font-semibold">
                  Location: {location}
                </h1>
              </div>
            </div>
            <button className="btn  my-3 btn-sm">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
