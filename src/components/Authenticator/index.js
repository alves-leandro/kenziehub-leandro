import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const Authenticator = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
