import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../SharedCompo/Context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("You have Logged Out", {
          icon: "🙆‍♀️",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="navbar  shadow-lg bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dash Board</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Cell Cart
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    src="https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg"
                    alt=""
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <>
                  {" "}
                  <li>
                    <span className="uppercase text-lg font-semibold">
                      {user?.displayName}
                    </span>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <button className="">
                    <NavLink to="/login" className="w-full">
                      log in
                    </NavLink>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
