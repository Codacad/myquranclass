import React from "react";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../images/footer-logo.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/teachers">Teachers</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="follow-us">
            <Link to={"#"} className="fb">
              <BsFacebook />
            </Link>
            <Link to={"#"} className="insta">
              <BiLogoInstagramAlt />
            </Link>
            <Link to={"#"} className="yt">
              <BsYoutube />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
