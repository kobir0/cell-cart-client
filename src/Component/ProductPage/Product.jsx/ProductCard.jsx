import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Modal from "../../SharedCompo/Modal/Modal";

const ProductCard = ({ product, refreash, modalnumber }) => {
  const {
    _id,
    reported,
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

  const url = `http://localhost:5001/users/${email}`;
  const { data: user = [] } = useQuery({
    queryKey: ["users", email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.user;
    },
  });

  const handleReport = (id) => {
    console.log(id);
    const report = { reported: true };

    fetch(`http://localhost:5001/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(report),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Reported SuccessFully");
          refreash();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="m-5   ">
      <div className="hero w-full shadow-xl rounded-lg  bg-slate-200">
        <div className=" ">
          <img className="min-w-full rounded-t-lg h-64" src={image} alt="" />
          <div className="m-3">
            <div className="flex justify-between">
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
              {reported ? (
                <button className="btn btn-xs btn-disabled ">
                  Report To Admin
                </button>
              ) : (
                <button
                  onClick={() => handleReport(_id)}
                  className="btn btn-xs "
                >
                  Report To Admin
                </button>
              )}
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
            <div className="flex justify-center">
              <label
                htmlFor={`modal-${modalnumber}`}
                className="btn btn-sm my-2"
              >
                Book Now
              </label>

              <Modal product={product} modalId={modalnumber}></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
