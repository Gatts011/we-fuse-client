import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-neurox2.png";
import { faBars, faCompressArrowsAlt, faChevronCircleDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

function popup() {
  alert("TODO: show our user links");
}
function popup2() {
  alert("TODO: something amazing just happened");
}

const Header = ({ title, description, background, display }) => (
  <div

    className="headerContainer" style={{ backgroundImage: `url(${background})` }}>
    <div className="popup">text text text text</div>
    <nav className="navParent">
      <Link to="/home">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <ul className="navLinks">
        {/* <Link className="liLinks" to="/home">
          <li>Home</li>
        </Link> */}

        <button className="bars" onClick={popup}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </ul>
    </nav>
    <div className="heading">
      <div className="headingchild">
        <div className="title">{title}</div>
      </div>
      <div className="underline" style={{ display: `${display}` }}></div>         {/*display these or not*/}
      <div className="description">{description}</div>
      <button className="bars" onClick={popup2}>
        <FontAwesomeIcon icon={faAngleDown} style={{ display: `${display}` }} />
        </button>
    </div>

  </div>
);

export default Header;
