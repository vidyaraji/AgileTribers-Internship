import { useNavigate } from "react-router-dom";
import { useAuth } from "../Task4/AuthContext.jsx";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();               
    navigate("/Task5/DashBoardTask5");     
  };

  return (
    <div>
      <div className="head">Protected LogIn LogOut</div>
      <div className="Login">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
