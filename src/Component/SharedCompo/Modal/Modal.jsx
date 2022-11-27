import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UserContext";

const Modal = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { brandName, model, sellingPrice, _id, image } = product;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const price = form.price.value;
    const buyerName = form.buyerName.value;
    const email = form.email.value;
    const number = form.number.value;
    const meetLocation = form.location.value;

    const order = {
      productId: _id,
      productName,
      price,
      buyerName,
      email,
      number,
      meetLocation,
      productImage: image,
    };
    console.log(order);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}

      <>
        {" "}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-96 relative">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
              <h1 className="text-xl text-center font-semibold">
                Please Fill Up The From
              </h1>
              <input
                type="text"
                name="productName"
                disabled
                value={`${brandName} ${model}`}
                className="input input-bordered w-full  "
              />
              <input
                type="text"
                name="price"
                disabled
                value={`$${sellingPrice}`}
                className="input input-bordered w-full  "
              />
              <input
                type="text"
                name="buyerName"
                className="input input-bordered w-full  "
                value={user?.displayName}
                disabled
              />
              <input
                type="text"
                name="email"
                className="input input-bordered w-full  "
                value={user?.email}
                disabled
              />
              <input
                type="text"
                name="number"
                placeholder="your contact number"
                className="input input-bordered w-full  "
                required
              />
              <input
                type="text"
                name="location"
                placeholder="your meeting location"
                className="input input-bordered w-full  "
                required
              />
              <button className="btn  btn-outline w-full shadow-xl">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Modal;
