import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../SharedCompo/Context/UserContext";
import Loading from "../../SharedCompo/Loading/Loading";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/products?email=${user?.email}`;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["brands", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });

  console.log(products);

  const handleDelete = (id, product) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${product.brandName} ${product.model} ? `
    );

    if (confirm) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
          refetch();
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  const handleAdvertise = (id, product) => {
    const advetise = { advertiseItem: true };

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(advetise),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Advetised SuccessFully");
          refetch();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

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
              <tr key={i}>
                <td>
                  {i + 1}: {product.brandName} {product.model}
                </td>
                <td>${product.sellingPrice}</td>
                <td>{product.status}</td>
                <td>
                  {product?.reqField?.advertiseItem ? (
                    <button className="btn btn-xs btn-success btn-outline">
                      Advertised
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdvertise(product._id, product)}
                      className="btn btn-xs btn-outline"
                    >
                      Advertise
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id, product)}
                    className="btn btn-xs btn-error btn-outline"
                  >
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
