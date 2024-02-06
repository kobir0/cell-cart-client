import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../SharedCompo/Context/UserContext";
import useToken from "../SharedCompo/Hooks/useToken";

const Register = () => {
  const [Error, setError] = useState("");
  const { createUser, updateProfileInfo, logOut } = useContext(AuthContext);
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState();
  const token = useToken(userEmail);

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const password = from.password.value;
    const email = from.email.value;
    const json = JSON.stringify(email);
    const lowerString = json.toLowerCase();
    const newEmail = JSON.parse(lowerString);

    const name = from.name.value;
    const url = from.url.value;
    const role = from.accType.value;

    console.log(role, password, newEmail, name, url);

    createUser(newEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.email) {
          logOut()
            .then(() => {})
            .catch((err) => {
              console.error(err);
            });
        }
        handleUpdateprofile(name, url);

        if (user.email) {
          userToDb(name, newEmail, url, role);
        }

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
        setError("");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const userToDb = (name, email, img, role) => {
    const user = { name, email, role, varified: false, img };

    console.log(user);

    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setUserEmail(data.email);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
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
                  <label className="label">
                    <span className="label-text">Select Your Account Type</span>
                  </label>

                  <div>
                    <select
                      defaultValue="Select Account Type"
                      name="accType"
                      type="text"
                      className="select select-bordered select-sm w-full  max-w-xs"
                      required
                    >
                      <option value="Buyer" selected>
                        Buyer
                      </option>
                      <option value="Seller">Seller</option>
                    </select>
                  </div>
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
                  <button className="btn btn-xs btn-outline ml-4  w-20">
                    Log In{" "}
                  </button>
                </NavLink>
              </div>
              <div className="divider text-xs my-2">OR </div>
              <div className="form-control mt-2 border-none">
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
