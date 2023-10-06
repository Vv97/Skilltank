import React, { ReactNode } from "react";
import { useAuth } from "../context/Authcontext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { Auth } = useAuth();

  return Auth.Auth ? children : <Navigate to="/studentlogin" />;
};

export default PrivateRoute;
