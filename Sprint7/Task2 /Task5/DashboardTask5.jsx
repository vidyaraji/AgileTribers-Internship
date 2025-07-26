import { useAuth } from "../Task4/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const DashboardTask5 = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();                 
    navigate("/Task5/LoginTask5");      
  };

  return (
    <div>
      <div className="head">Protected LogIn LogOut</div>
      <div className="Login">
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default DashboardTask5;
