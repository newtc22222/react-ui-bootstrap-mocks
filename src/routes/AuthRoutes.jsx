import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const location = useLocation();

  if (1 === 0) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthRoutes;
