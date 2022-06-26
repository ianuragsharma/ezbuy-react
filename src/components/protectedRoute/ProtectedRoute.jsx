import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export { ProtectedRoute };
