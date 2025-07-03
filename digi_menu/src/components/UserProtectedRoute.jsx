// src/components/UserProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function UserProtectedRoute({ children }) {
  const isUser = localStorage.getItem("isUser") === "true";
  return isUser ? children : <Navigate to="/qr-login" replace />;
}
