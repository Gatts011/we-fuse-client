import React from "react";
import Logo from "../images/logo-neurox2.png"

const Header = ({ title , description, background }) => (
    <div className="list" style={{ backgroundImage: `url(${background})`}}>
      <div className="navbar">
          <div className="navitem"><img alt="" src={Logo}/></div>
          <div className="navitem"><a href="hotkey.co.za">About</a></div>
      </div>
      <div className="header">
          <h1>{title}</h1>
          <h2>{description}</h2>
      </div>
  </div>
);

export default Header;
