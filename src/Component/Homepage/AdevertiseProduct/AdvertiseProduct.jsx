import { useQuery } from "@tanstack/react-query";
import React from "react";

const AdvertiseProduct = () => {
  const url = `http://localhost:5000/advertised`;
  const { data: products = [] } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });

  return (
    <div>
      <h1>Advertise Product</h1>
    </div>
  );
};

export default AdvertiseProduct;
