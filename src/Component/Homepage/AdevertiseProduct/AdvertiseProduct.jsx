import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../ProductPage/Product.jsx/ProductCard";

const AdvertiseProduct = () => {
  const url = `https://cell-cart-server.onrender.com/advertised`;
  const { data: products = [], refetch } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });

  if (products.length) {
    return (
      <div className="mx-10   mt-32">
        <h1 className=" text-3xl font-bold ">Recommended Products For You </h1>
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3">
          {products?.map((product, i) => (
            <ProductCard
              key={product._id}
              refreash={refetch}
              product={product}
              modalnumber={i + 1}
            ></ProductCard>
          ))}
        </div>
      </div>
    );
  }
};

export default AdvertiseProduct;
