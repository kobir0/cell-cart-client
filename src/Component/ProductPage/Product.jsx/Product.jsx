import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  const url = `http://localhost:5000/products/${id}`;
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });
  console.log(products, id);

  return (
    <div className="min-h-screen">
      <h1>{products?.length}</h1>
    </div>
  );
};

export default Product;