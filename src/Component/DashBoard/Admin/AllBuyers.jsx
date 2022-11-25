import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../SharedCompo/Loading/Loading";

const AllBuyers = () => {
  const url = `http://localhost:5000/users?name=Buyer`;
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.users;
    },
  });

  return <div>{users.length}</div>;
};

export default AllBuyers;
