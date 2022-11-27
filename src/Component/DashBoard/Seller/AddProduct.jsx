import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../SharedCompo/Context/UserContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    const date = `'${new Date()}'`;
    const time = date.split(" ");
    const newTime = date.split(" ")[4];
    const newDate = time.slice(1, 4).join("-");
    event.preventDefault();
    const target = event.target;

    const brand = target.brand.value;
    const brandId = brand.split(" ")[0];
    const brandName = brand.split(" ")[1];
    const model = target.model.value;
    const sellingPrice = target.sellingPrice.value;
    const originalPrice = target.originalPrice.value;
    const usedYear = target.year.value;
    const condition = target.condition.value;
    const image = target.image.value;
    const sellingReason = target.sellingReason.value;
    const contactNumber = target.contactNumber.value;
    const location = target.location.value;

    if (brand === "Select" || condition === "Select") {
      toast.error("Please Select All Requirements correctly");
      return;
    }

    const product = {
      brandId,
      brandName,
      model,
      sellingPrice,
      originalPrice,
      usedYear,
      condition,
      image,
      sellingReason,
      contactNumber,
      location,
      time: newTime,
      date: newDate,
      email: user?.email,
      userImg: user?.photoURL,
      userName: user?.displayName,
      status: "Available",
      userVerified: false,
    };

    fetch("https://cell-cart-server.onrender.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
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
    <div className="flex justify-center m-3 rounded-lg bg-slate-300 p-4">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="text-center my-2 text-lg">Product Information</h1>
          <select
            name="brand"
            defaultValue="Select Your Brand"
            className="select select-bordered w-full my-2"
            required
          >
            <option value="Select" selected disabled>
              Select Your Brand Name
            </option>
            <option value={"01 I-Phone"}>I Phone</option>
            <option value={"02 OnePlus"}>OnePlus</option>
            <option value={"03 Samsung"}>Samsung</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="model"
              required
              placeholder="Product Model"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="sellingPrice"
              required
              placeholder="selling price $"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="originalPrice"
              required
              placeholder="original price $"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="year"
              required
              placeholder="year of use"
              className="input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <select
            name="condition"
            defaultValue="Select Your Brand"
            className="select select-bordered w-full my-2"
            required
          >
            <option value="Select" selected disabled>
              Select product condition
            </option>
            <option value={"Best"}>Best</option>
            <option value={"Better"}>Better</option>
            <option value={"Good"}> Good </option>
            <option value={" Worse"}> Worse </option>
          </select>

          <br></br>
          <input
            type="text"
            name="image"
            required
            placeholder="image url"
            className="input   input-bordered input-md w-full"
          />
          <textarea
            className="textarea mt-2 w-full  textarea-bordered"
            name="sellingReason"
            placeholder="selling reason"
          ></textarea>
        </div>
        <div>
          <h1 className="text-center my-2 text-lg">Your Information</h1>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="contactNumber"
              required
              placeholder="contact number"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              name="location"
              required
              placeholder="your locaton"
              className="input input-bordered input-md w-full max-w-xs"
            />
          </div>
        </div>
        <br></br>
        <button type="submit" className=" mt-2 btn btn-outline  w-full ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
