import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

function PublicRoute({ children }) {
  const { authUser } = useAuthStore();

  if (authUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PublicRoute;
