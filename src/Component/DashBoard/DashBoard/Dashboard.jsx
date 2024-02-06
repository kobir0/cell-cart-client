import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../SharedCompo/Context/UserContext";
import useRole from "../../SharedCompo/Hooks/useRole";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userRole] = useRole(user?.email);

  return (
    <div>
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <label
              htmlFor="dashboard-drawer"
              className=" drawer-button lg:hidden"
            >
              {" "}
              <img
                className="mt-5 w-5  cursor-pointer"
                src="https://i.ibb.co/BBKgp3s/pngegg.png"
                alt=""
              ></img>
            </label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side borde">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80  border bg-white text-base-content">
              {userRole?.role === "Seller" && (
                <>
                  {" "}
                  <li>
                    <NavLink to="../dashboard/addProduct"> Add Product</NavLink>
                  </li>
                  <li>
                    <NavLink to="../dashboard/myProduct"> My Product</NavLink>
                  </li>
                </>
              )}
              {userRole?.role === "Buyer" && (
                <>
                  {" "}
                  <li>
                    <NavLink to="../dashboard/myOrders"> My Orders</NavLink>
                  </li>
                </>
              )}

              {userRole?.role === "Admin" && (
                <>
                  <li>
                    <NavLink to="../dashboard/allSellers"> All Seller </NavLink>
                  </li>
                  <li>
                    <NavLink to="../dashboard/allBuyers"> All Buyer </NavLink>
                  </li>
                  <li>
                    <NavLink to="../dashboard/reported">
                      {" "}
                      Reported Product
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
