import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
    <nav className="navbar">
      <NavLink
        to="/NavBarTask6/HomeTask6"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/NavBarTask6/AboutTask6"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        About
      </NavLink>
      <NavLink
        to="/NavBarTask6/ContactTask6"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Contact
      </NavLink>
    </nav>
    <div className="Outlet">
      <Outlet/>
    </div>
    
    </>
  );
}

export default NavBar;
