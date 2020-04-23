import React, {Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-neurox2.png";
import { faBars, faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";


var isMe = false;

function expandProfile() {
  var pro = document.getElementById("profile");

  if (isMe === false) {
    isMe = true;
    pro.style.height = "5rem";

    pro.style.borderBottom = "1px solid rgb(131, 131, 131)";
  } else {
    isMe = false;
    pro.style.height = "0rem";
    pro.style.borderBottom = "0px";
    // pro.style.padding= "0rem";
    // elemc.style.height = "35vh";
  }
}

var isEx = false;

function expandMenu() {
  var elem = document.getElementById("popup");

  if (isEx === false) {
    isEx = true;
    elem.style.height = "50px";
    // elem.style.height = "40vh";
  } else {
    isEx = false;
    elem.style.height = "0px";
    // elemc.style.height = "35vh";
  }
}

const Header = ({ title, description, background, display }) => {
  return (
    <Fragment>
      <div id="profile" className="profile">
        <a href="#profile">my posts</a>
        <a href="#profile">my profile</a>
        <a href="#logout">logout</a>
      </div>

      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${background})` }}
      >
        <nav className="navParent">
          <Link to="/home">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <ul className="navLinks">
            <button className="bars" onClick={expandProfile}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </ul>
        </nav>

        <div className="heading">
          <div className="headingchild">
            <div className="title">{title}</div>
          </div>
          <div className="underline" style={{ display: `${display}` }}></div>{" "}
          {/*display these or not*/}
          <div className="description">{description}</div>
          <button className="bars" onClick={expandMenu}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ display: `${display}` }}
            />
          </button>
        </div>
        <div id="popup" className="popup">
          <div>
            <label htmlFor="show">show:</label>
            <select id="show">
              <option value="1-10">1-10</option>
              <option value="1-50">1-50</option>
              <option value="1-100">1-100</option>
              <option value="1-1000">1-1000</option>
            </select>
          </div>
          <a href="#home">
            <FontAwesomeIcon icon={faStar} />
            favorites
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
