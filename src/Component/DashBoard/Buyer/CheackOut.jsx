import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheackOut = ({ booking }) => {
  const { price, email, buyerName, productId, _id } = booking;

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    } else {
      setCardError("");
    }

    if (paymentIntent?.status === "succeeded") {
      setSuccess("Thank You ! Your payment has placed successfully");
      setTransactionId(paymentIntent?.id);

      const advetise = { status: "Sold" };

      fetch(`http://localhost:5000/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(advetise),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });

      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionId: paymentIntent?.id }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Paid SuccessFully");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }

    if (success) {
      toast.success(success);
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <CardElement
          className=" border p-4 rounded-lg bg-slate-100"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            className="btn btn-primary btn-sm my-3 btn-outline"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      <h1 className="text-red-700 ">{cardError}</h1>
      {success && (
        <div>
          <p className="text-green-600"> {success}</p>
          <p>
            {" "}
            Your Transaction Id: <span>{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheackOut;
