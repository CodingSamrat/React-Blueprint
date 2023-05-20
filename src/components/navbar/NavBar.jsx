import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";
// import * as FaIcons from "react-icons/fa";

import "./NavBar.css";

export const NavBar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  
  const handelSidebar = () => {
    setSidebar(!sidebar);
  }

  const hanledAlert = () => {
    console.log("Login");
  }
  const hanledAlert2 = () => {
    console.log("Sign Up")
  }
  return (
    <>
      <nav className="nav">
        <div className="_navbar">
          <div className="navbar-item">
            <Link className="nav-brand" to="/">
              AcePic Studio
            </Link>
          </div>
          <div className="navbar-item sidebar-open">
            <button className="btn sidebar-open-btn" onClick={handelSidebar}>
              <span>=</span>
            </button>
          </div>

          <div className="navbar-item menu-bar">
            {NavMenu.map((item, index) => {
              return (
                <Link className="menu-bar-item" key={index} to={item.url}>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>

          <div className="navbar-item nav-other">
            <Link className="nav-other-item" onClick={hanledAlert}>
              <span>Login</span>
            </Link>
            <Link className="nav-other-item" onClick={hanledAlert2}>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="sidebar" style={{ left: sidebar ? "0" : "-100%" }}>
        {/* <div className="sidebar"> */}
        <div className="sidebar-profile">
          <img className="cover" src="" alt="" />
          <img className="avater" src="" alt="" />
          <h4>Username</h4>
        </div>
        <div className="sidebar-menu">
          {NavMenu.map((item, index) => {
            return (
              <div className="sidebar-menu-item" key={index} >
                <Link className="sidebar-link" to={item.url} onClick={handelSidebar} >
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="overlay" onClick={handelSidebar} style={{ display: sidebar ? "inherit" : "none" }}>

      </div>
    </>
  );
}



export default NavBar