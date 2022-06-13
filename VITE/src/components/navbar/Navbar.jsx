import React from "react";
import logo from "../../photos/logo.png";
import home from "../../photos/home1.jpg";
import { navLinks, logLinks } from "./Navlinks.js";
import { NavLink } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <div className="mai nav-home">
      <div className="nav-container ">
        <div className="nav-links">
          <img src={logo} alt="" />
          {navLinks.map((link) => (
            <NavLink key={link.is} to={link.path}>
              {link.lable}
            </NavLink>
          ))}
        </div>

        <div className="nav-login">
          {logLinks.map((link) => (
            <NavLink key={link.id} to={link.path}>
              {link.lable}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
