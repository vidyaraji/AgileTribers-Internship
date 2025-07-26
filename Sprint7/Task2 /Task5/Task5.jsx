import { useAuth } from "../Task4/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const Task5 = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/Task5/DashBoardTask5" /> : <Navigate to="/Task5/LoginTask5" />;
};

export default Task5;
