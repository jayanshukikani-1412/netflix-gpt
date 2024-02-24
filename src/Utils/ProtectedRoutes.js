import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  let location = useLocation();

  if (!token && location.pathname !== "/login") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (token && location.pathname === "/login") {
    return <Navigate to="/browse" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
