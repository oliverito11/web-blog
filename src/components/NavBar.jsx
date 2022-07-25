import '../styles/NavBar.css'
import { Link } from "react-router-dom"

function NavBar({active}) {
  return (
    <div className="navBarHeader">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-end">
          <div className="btn-group">
            <button type="button" className="navbarbtn btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link to="./projects" className={active === "projects" ? "dropdown-item active" : "dropdown-item"}>Projects</Link></li>
              <li><Link to="./tutorials" className={active === "tutorials" ? "dropdown-item active" : "dropdown-item"}>Tutorials</Link></li>
              <li><Link to="./" className={active === "home" ? "dropdown-item active" : "dropdown-item"}>About me</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
