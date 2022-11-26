import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../SharedCompo/Context/UserContext";
import useRole from "../SharedCompo/Hooks/useRole";
import Loading from "../SharedCompo/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  const [userRole, roleLoading] = useRole(user?.email);

  const { role } = userRole;
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (user?.email && role === "Seller") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
