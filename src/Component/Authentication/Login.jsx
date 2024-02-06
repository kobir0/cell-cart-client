import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../SharedCompo/Context/UserContext";
import useToken from "../SharedCompo/Hooks/useToken";

const Login = () => {
  const [Error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { logIn, signInWithPopGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const token = useToken(userEmail);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;

    setUserEmail(email);

    logIn(email, password)
      .then((result) => {
        console.log(result);

        if (result?.user?.email) {
          toast.success("Logged In SuccessFully !!");
          navigate(from, { replace: true });
        }
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

        if (res?.user?.email) {
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
    setUserEmail(email);

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
          navigate(from, { replace: true });
          setUserEmail(data?.email);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content  w-80 lg:w-96 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="    h-[370px] ">
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
                      <span className=" font-semibold"> New User ?</span>{" "}
                      <NavLink
                        to={"../register"}
                        className="label-text-alt link link-hover"
                      >
                        <button className="btn btn-xs btn-outline ">
                          Click to Register
                        </button>
                      </NavLink>
                    </>
                  </label>
                  <p className="text-red-600">{Error}</p>
                </div>
                <div className="form-control mt-6 border-none">
                  <button className="btn btn-outline shadow-2xl  ">
                    Login
                  </button>
                </div>
                <div className="divider text-xs my-2">OR SIGN IN WITH</div>
              </div>
            </form>

            <div className="flex justify-center">
              <button className="flex  m-2" onClick={handleGooglePopUp}>
                <img
                  className="google h-5 w-5 mt-1 mb-6"
                  src="https://freesvg.org/img/1534129544.png"
                  alt=""
                ></img>{" "}
                <>Google</>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
