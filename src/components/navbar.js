import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-neurox2.png";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "../App.css";

function popup() {
  alert("TODO: show our user links");
}

const Header = ({ title, description, background }) => (

 
  
  <div className="headerContainer" style={{ backgroundImage: `url(${background})` }}>
     <div className="popup">
    text
    text
    text
    text
    </div>
    <nav className="navParent">
      <Link  to="/home">
      <img src={Logo} alt="" className="logo" />
      </Link>
      <ul className="navLinks">
        {/* <Link className="liLinks" to="/home">
          <li>Home</li>
        </Link> */}
        
        <button className="bars" onClick={popup}><FontAwesomeIcon icon={faBars} style={{ paddingRight: "0.5em" }}/></button> 
        
      </ul>
    </nav>
    <div className="heading">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

export default Header;
