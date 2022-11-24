import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../SharedCompo/Context/UserContext";

const Register = () => {
  const [Error, setError] = useState("");
  const { createUser, updateProfileInfo } = useContext(AuthContext);
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const password = from.password.value;
    const email = from.email.value;
    const name = from.name.value;
    const url = from.url.value;
    const type = from.accType.value;
    if (type === "Select Account Type") {
      toast.error("Select Your Account Type");
      return;
    }

    console.log(password, email, name, url, type);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleUpdateprofile(name, url);

        console.log("signed", user);

        // setLoading(false);

        toast.success("Registered successFully !!");

        from.reset();
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleUpdateprofile = (name, url) => {
    const profile = { displayName: name, photoURL: url };
    updateProfileInfo(profile)
      .then(() => {
        // setLoading(false);
        setError("");
        toast.success("Updated Profile");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  //   const handleLoading = () => {
  //     setLoading(true);
  //   };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-80 lg:w-96 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register Here!!</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  name="url"
                  type="text"
                  placeholder="Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label ">
                  <select
                    defaultValue="Select Account Type"
                    name="accType"
                    type="text"
                    className="select select-bordered select-sm w-full  max-w-xs"
                    required
                  >
                    <option value="Select Account Type" disabled selected>
                      Select Account Type
                    </option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </label>
                <p className="text-red-600">{Error}</p>
              </div>
              <div className="flex">
                <span className=" font-semibold mr-1">
                  {" "}
                  Already have an account?
                </span>{" "}
                <NavLink
                  to={"../login"}
                  className="label-text-alt link link-hover"
                >
                  <button className="btn btn-xs btn-outline  w-20">
                    Log In{" "}
                  </button>
                </NavLink>
              </div>
              <div className="form-control mt-6 border-none">
                {/* {loading ? (
                  <button className="btn btn-outline shadow-lg shadow-teal-100 btn-success">
                    Loading...
                  </button>
                ) : (
                  <button
                    onClick={handleLoading}
                    className="btn btn-outline shadow-lg shadow-teal-100 btn-success"
                  >
                    Register
                  </button>
                )} */}
                <button className="btn btn-outline shadow-2xl">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
