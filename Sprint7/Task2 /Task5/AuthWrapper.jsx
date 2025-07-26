import { useAuth } from "../Task4/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/Task5/LoginTask5" replace />;
};

export default AuthWrapper;
