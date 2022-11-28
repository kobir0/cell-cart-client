import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheackOut from "./CheackOut";
const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
  const order = useLoaderData();
  console.log(order);

  return (
    <div>
      <h1 className="text-xl m-4">
        {" "}
        Please pay{" "}
        <strong className="text-primary">
          ${order?.order?.price}.00{" "}
        </strong>for{" "}
        <span className="font-bold">{order?.order?.productName}</span>
      </h1>
      <div className="w-96 h-10 mx-4 my-10">
        {" "}
        <Elements stripe={stripePromise}>
          <CheackOut booking={order?.order}></CheackOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
