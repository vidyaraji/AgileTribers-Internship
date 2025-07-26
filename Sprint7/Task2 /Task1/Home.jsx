import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="Home">
        <div className="heading"> Welcome To Home Page</div>
        <div className="content">
            We Providing Intership on various Sectors
        </div>
        <button>Connect with Us</button>
        <div className="BackHome"><Link to="/">Back To Home</Link></div>
        </div>
        
    )
}
export default Home;