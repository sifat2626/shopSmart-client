import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <span className="loading loading-dots loading-lg"></span>;

  if (user) return <div>{children}</div>;

  return <Navigate state={location.pathname} to={"/login"} replace />;
}

export default PrivateRoute;
