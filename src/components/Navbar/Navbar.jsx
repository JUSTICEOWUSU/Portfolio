import React from "react";
import style from "./Navbar.module.css";
import NavbarButton from "./NavbarUtils/NavbarButton";

function Navbar() {
  
  return (
      <div className={`container ${style.navbar} `}>
<div className={`${style.fixing}`}>
        <div className={`container d-flex ${style.navbar1}`}>
                  
          <span className={style.navbarTitle}>{"JUSTICE"}<span style={{ color: "#f7990eef" }}>{"_</>"}</span></span>
          <NavbarButton  content={"home"} location="#home"/>
          <NavbarButton  content={"about"} location="#about"/>
          <NavbarButton  content={"contact"} location="#contact-me"/>
</div>      </div>
</div>
  );
}

export default Navbar;
