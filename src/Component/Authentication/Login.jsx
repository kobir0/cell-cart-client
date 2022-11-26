import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../SharedCompo/Context/UserContext";

const Login = () => {
  const [Error, setError] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  const { logIn, signInWithPopGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // console.log(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;

    if (password.length < 5) {
      setLoading(false);
    }

    logIn(email, password)
      .then((result) => {
        setLoading(false);

        navigate(from, { replace: true });

        toast.success("Logged In SuccessFully !!");
      })
      .catch((error) => {
        setError(error.message);
        if (error.message.includes("wrong-password")) {
          setError("Your password is incorrect");
        }

        console.error(error);
      });
  };

  const handleGooglePopUp = () => {
    signInWithPopGoogle()
      .then((res) => {
        toast.success("You have Logged In SuccessFully !!");

        if (res.user.email) {
          userToDb(
            res.user.displayName,
            res.user.email,
            res.user.photoURL,
            "Buyer"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const userToDb = (name, email, img, role) => {
    const user = { name, email, role, varified: false, img };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.email) {
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  w-80 lg:w-96 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login Now!</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
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
                  <>
                    <span className="text-teal-800 font-semibold">
                      {" "}
                      New User ?
                    </span>{" "}
                    <NavLink
                      to={"../register"}
                      className="label-text-alt link link-hover"
                    >
                      <button className="btn btn-xs btn-success ">
                        Click to Register
                      </button>
                    </NavLink>
                  </>
                </label>
                <p className="text-red-600">{Error}</p>
              </div>
              <div className="form-control mt-6 border-none">
                {loading ? (
                  <button className="btn btn-outline shadow-lg shadow-teal-100 btn-success">
                    Loading...
                  </button>
                ) : (
                  <button
                    onClick={handleLoading}
                    className="btn btn-outline shadow-lg shadow-teal-100 btn-success"
                  >
                    Login
                  </button>
                )}
              </div>
              <div className="flex justify-center">
                <button className="flex  m-2" onClick={handleGooglePopUp}>
                  <img
                    className="google h-5 w-5 mt-1"
                    src="https://freesvg.org/img/1534129544.png"
                    alt=""
                  ></img>{" "}
                  <>Google</>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
