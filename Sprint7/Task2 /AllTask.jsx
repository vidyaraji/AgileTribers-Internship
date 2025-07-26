import {Link} from "react-router-dom";
import NavBar from './Task6/NavBar.jsx';
import Task1 from './Task1/Task1.jsx';

function AllTask(){
    return(
        <>
        <div>
            <Task1/>
        </div>
        <div className="Link">
           <Link to="/Task2/DashBoard">Task2 DashBoard</Link>
        </div>
        <div className="Link">
            <Link  to="/Task3/Users">Users Details</Link>
        </div>
        <div className="Link">
            <Link to="/login">LogIn</Link>
        </div>
        <div className="Link">
            <Link to="/Task5">Task5 Navigate</Link>
        </div>
        <div>
            <NavBar/>
        </div>
        </>
        
    )
}
export default AllTask;
