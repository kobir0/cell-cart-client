import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";
import { AuthContext } from "../../SharedCompo/Context/UserContext";
import Loading from "../../SharedCompo/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/orders/${user?.email}`;
  const {
    data: orders = [],
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <>
                <tr>
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
                  <td>
                    <button className="btn btn-xs btn-outline"> Pay Now</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
