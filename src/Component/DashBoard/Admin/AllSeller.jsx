import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../SharedCompo/Loading/Loading";

const AllSeller = () => {
  const url = `http://localhost:5000/users?name=Seller`;
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
            {users?.length &&
              users?.map((user, i) => (
                <tr key={i}>
                  <td>
                    {i + 1}: {user?.name}
                  </td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    {user?.varified ? (
                      <button className="btn btn-xs btn-success btn-outline">
                        Verified
                      </button>
                    ) : (
                      <button
                        //   onClick={() => handleAdvertise(product._id, product)}
                        className="btn btn-xs btn-outline"
                      >
                        Verify
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      // onClick={() => handleDelete(product._id, product)}
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

export default AllSeller;
