import {Link,useParams} from "react-router-dom";
import './Task3.css';

function Users(){
    const {userId}=useParams();
    return(
        <>
        <h1 className="Task3head">Displaying Dynamic usersId Details</h1>
         <h2 className="users">Users: {userId}</h2>
         <div className="BackHome">
        <Link to="/">Back To Home</Link>
         </div>
        </>

    )
}

export default Users;
