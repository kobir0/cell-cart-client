import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../SharedCompo/Loading/Loading";

const ReportedProduct = () => {
  const url = `http://localhost:5000/reported`;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  ">
      {products?.map((product) => (
        <div className="card max-w-80 m-3 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              {product.brandName} {product.model}
            </h2>
            <p>
              Posted By:{" "}
              <span className="text-cyan-300">{product.userName}</span>
            </p>
            <p>
              Email: <span className="text-cyan-300">{product.email}</span>
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(product._id, product)}
                className="btn text-slate-50 btn-sm btn-outline"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportedProduct;
