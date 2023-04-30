import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navHeader.css";

const NavHeader = () => {
  const [userLog, setUserLog] = useState(false);

  const LoginHandler = () => {
    if (userLog == false) {
      setUserLog(true);
      console.log(true);
    } else if (userLog == true) {
      setUserLog(false);
      console.log(false);
    }
  };

  return (
    <>
      <nav className="nav-box">
        <div className="logo-box">
          <span className="logo-name">Foodies</span>
        </div>
        <div className="link-box">
          <ul>
            <li><Link to="/">home</Link> </li>
            <li><Link to="about">about</Link> </li>
            <li><Link to="discount">discount</Link></li>
            <li><Link to="'contact">  cart<span> </span> <i className="fa-solid fa-cart-shopping"></i></Link></li>
          </ul>
        </div>
        {/* <button className={!userLog == true ? "log-btn" : "log-btn login-btn"} onClick={()=>LoginHandler()}>{!userLog == true ? "log in" : "log out"}</button> */}
        <div className="togle-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
