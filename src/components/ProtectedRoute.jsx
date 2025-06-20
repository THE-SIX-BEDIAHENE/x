import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import PageLoader from "./PageLoader";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
