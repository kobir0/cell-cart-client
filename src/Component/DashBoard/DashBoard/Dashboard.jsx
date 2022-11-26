import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../SharedCompo/Context/UserContext";
import Loading from "../../SharedCompo/Loading/Loading";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // const [userRole, setUserRole] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserRole(data.user))
  //     .catch((err) => console.error(err));
  // }, [user?.email]);

  const url = `http://localhost:5000/users/${user?.email}`;
  const { data: userRole = [], isLoading } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.user;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(userRole);
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

              {userRole?.role === "Admin" && (
                <>
                  <li>
                    <NavLink to="../dashboard/allSellers"> All Seller </NavLink>
                  </li>
                  <li>
                    <NavLink to="../dashboard/allBuyers"> All Buyer </NavLink>
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
