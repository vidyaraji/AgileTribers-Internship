import { Outlet,Link } from "react-router-dom";
import './Task2.css'
function DashBoard(){
    return(
        <div className="Task2">
        <div className="heading">DashBoard</div>
        <div className="DashBoardTask2">
        <Link  className="btnTask2" to="/Task2/DashBoard/Profile">Profile</Link>
        <Link className="btnTask2" to="/Task2/DashBoard/Settings">Settings</Link>
        </div> 
        <div className="Outlet"><Outlet/></div>
        </div>
    )
}
export default DashBoard;
