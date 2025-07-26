import {Link} from "react-router-dom";
import contact from './contact-mail.png';

function Contact(){
    return(
        <div className="Contact">
        <div className="heading"> Welcome To Contact Page</div>
        <div className="content">
            For Enquries Contact<br/>
            abc123@gmail.com 
        </div>
        <div><img src={contact} width="100px"/></div>
        <div className="BackHome"><Link to="/">Back To Home</Link></div>
        </div>
        
    )
}
export default Contact;