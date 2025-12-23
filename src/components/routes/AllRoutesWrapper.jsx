import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import LoaderComponent from "../ui/Loader";

function AuthInitializer({ children }) {
  const { checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  if (isCheckingAuth) return <LoaderComponent />;

  return children;
}

export default AuthInitializer;
