import logo from '../logo.svg';
import search from '../search.svg';
//import logo from './logo.png';
import { NavLink } from "react-router-dom";

function Footer(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
            <img src={logo}  alt="logo" height="50px" width="50px" />
            </a>
            <span class="navbar-brand">Umapreethi Santhanakrishnan</span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
             <span class="navbar-toggler-icon"></span>
            </button>
            <div  class="navbar-collapse collapse  " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto   ">
                <li class="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    class="nav-link active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="active" class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="active" class="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
              </ul>
             
              <a class="navbar-brand" href="#">
                <img src={search}  alt="logo" height="20px" width="20px" />
              </a>
              </div>
          </div>
        </nav>
      );
}

export default Footer;