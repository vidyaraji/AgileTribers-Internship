import {Link} from "react-router-dom";
import Error from './Error.png';
function NotFoundPage(){
    return(
        <div className="ErrorModule">
        <div className="Error">
            <img src={Error}/>
        <h1>Error 404</h1>
        <h2>Ooops... Page Not Found</h2>
        <Link className="Link"to="/">Back To Home</Link>
        </div>
        </div>
        
    )
}


export default NotFoundPage;
