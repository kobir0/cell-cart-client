import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../SharedCompo/Context/UserContext";
import Loading from "../../SharedCompo/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage?.getItem("accessToken");
  const url = `https://cell-cart-4.onrender.com/orders?email=${user?.email}`;
  const {
    data: orders = [],
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: { author: token },
      });
      const data = await res.json();
      return data.orders;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Transaction Id</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={i}>
                <th>
                  {" "}
                  <img
                    className="mask w-32 mask-circle"
                    src={order.productImage}
                    alt=""
                  />{" "}
                </th>
                <td>{order.productName}</td>
                <td> ${order.price}</td>

                <td>{order?.transactionId}</td>
                <td>
                  {order?.transactionId ? (
                    <button className="btn btn-success btn-disabled btn-xs ">
                      Paid
                    </button>
                  ) : (
                    <NavLink
                      to={`../payment/${order._id}`}
                      className="btn btn-xs btn-outline"
                    >
                      Pay Now
                    </NavLink>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
