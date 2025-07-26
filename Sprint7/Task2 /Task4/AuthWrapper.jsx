import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthWrapper = ({children}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children: <Navigate to="/login" replace />;
};

export default AuthWrapper;
