import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../SharedCompo/Loading/Loading";
import ProductCard from "./ProductCard";

const Product = () => {
  let { id } = useParams();
  const url = `http://localhost:5001/products/${id}`;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
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
  );
};

export default Product;
