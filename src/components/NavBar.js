import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import img1 from "../../src/img/tanvir-pp.jpg";

function Navbar(props) {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);
  return (
    <>
      <div className="mobile-nav">
        <NavLink exact to="/">
          <div className="profileText">
            <spam className="firstW">T</spam>
            <spam className="lastw">ANVIR</spam>
            <spam className="professionW">software engineer</spam>
          </div>
        </NavLink>

        

        <div className="navbuttonC" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>

      
      <div className={click ? "sidenav show" : "sidenav"}>

        <div class="profileimage">
          <img src={img1} alt="some value"></img>
        </div>

        <NavLink exact to="/" activeClassName="active" onClick={handleClick}>
          <div className="profileText">
            <spam className="firstW">T</spam>
            <spam className="lastw">ANVIR</spam>
            <spam className="professionW">software engineer</spam>
          </div>
        </NavLink>

        <div className="mynav">
          <ul>
            <li>
              <div className="nav-container">
                <NavLink exact to="/" activeClassName="active" onClick={handleClick}>
                  About
                </NavLink>
              </div>
            </li>
            <li>
              <div className="nav-container">
                <NavLink exact to="/skills" activeClassName="active" onClick={handleClick}>
                  Skills
                </NavLink>
              </div>
            </li>
            <li>
              <div className="nav-container">
                <NavLink exact to="/experience" activeClassName="active" onClick={handleClick}>
                  Experience
                </NavLink>
              </div>
            </li>
            <li>
              <div className="nav-container">
                <NavLink exact to="/project" activeClassName="active" onClick={handleClick}>
                  Project
                </NavLink>
              </div>
            </li>
            <li>
              <div className="nav-container">
                <NavLink exact to="/blog" activeClassName="active" onClick={handleClick}>
                  Blog
                </NavLink>
              </div>
            </li>
            <li>
              <div className="nav-container">
                <NavLink exact to="/contact" activeClassName="active" onClick={handleClick}>
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
