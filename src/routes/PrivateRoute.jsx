import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children, requireConfig }) {
  const { user } = useAuth();
  const config = localStorage.getItem("stack_config");

  if (!user) return <Navigate to="/" replace />;
  if (requireConfig && !config) return <Navigate to="/config" replace />;

  return children;
}
