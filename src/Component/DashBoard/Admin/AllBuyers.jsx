import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../SharedCompo/Context/UserContext";

import Loading from "../../SharedCompo/Loading/Loading";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage?.getItem("accessToken");
  const url = `https://cell-cart-server-new.onrender.com/users?name=Buyer&&email=${user?.email}`;
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: { author: token },
      });
      const data = await res.json();
      return data.users;
    },
  });

  const handleDelete = (id, user) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${user.email}  ? `
    );

    if (confirm) {
      fetch(`https://cell-cart-server-new.onrender.com/users/${id}`, {
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
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Email</th>
              <th>Account Type</th>

              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users?.length &&
              users?.map((user, i) => (
                <tr key={i}>
                  <td>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(user._id, user)}
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

export default AllBuyers;
