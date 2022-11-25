import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../SharedCompo/Context/UserContext";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/products?email=${user?.email}`;
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["brands", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Current Status</th>
              <th>Advertisement</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr>
                <td>
                  {i + 1}: {product.brandName} {product.model}
                </td>
                <td>${product.sellingPrice}</td>
                <td>{product.status}</td>
                <td>
                  {" "}
                  <button className="btn btn-xs btn-outline">Advertise</button>
                </td>
                <td>
                  <button className="btn btn-xs btn-error btn-outline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
