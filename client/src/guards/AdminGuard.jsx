import { useContext } from "react";
import { UserContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminGuard() {
  const { isAdmin } = useContext(UserContext);

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
