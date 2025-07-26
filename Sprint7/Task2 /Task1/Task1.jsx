import {Link} from "react-router-dom";
import './Task1.css';



function Task1(){
    return(
        <div className="Task1NavBar">
            <Link className="nav" to='/Task1/Home'>Home</Link>
            <Link className="nav" to='/Task1/About'>About</Link>
            <Link className="nav" to='/Task1/Contact'>Contact</Link>
        </div>
    )
}

export default Task1;
