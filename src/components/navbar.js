import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-neurox2.png";

import "../App.css";

const Header = ({ title, description, background }) => (
  <div
    className="headerContainer"
    style={{ backgroundImage: `url(${background})` }}
  >
    <nav className="navParent">
      <img src={Logo} alt="" className="logo" />
      <ul className="navLinks">
        <Link className="liLinks" to="/home">
          <li>Home</li>
        </Link>
        <Link className="liLinks" to="/entry">
          <li>Entry</li>
        </Link>
      </ul>
    </nav>
    <div className="heading">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

export default Header;
