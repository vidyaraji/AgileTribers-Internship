import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './Task4.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <>
    <div className="head">Protected Url</div>
    <div className="Login">
      <h2>Login</h2><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
    </>
  );
};

export default Login;
