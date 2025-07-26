import {Link} from "react-router-dom";
import './Task1.css';
import Aboutimg from './user.png'


function About(){
    return(
        <div className="Contact">
        <div className="heading"> Welcome To About Page</div>
        <div className="content">
             Our Services for the Tech in Running Over 15 Years.
        </div>
        <div><img src={Aboutimg} width="100px"/></div>
        <div className="BackHome"><Link to="/">Back To Home</Link></div>
        </div>
        
    )
}
export default About;