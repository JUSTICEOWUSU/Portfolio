import React from "react";
import style from "./NavbarButton.module.css"
import {NavLink} from "react-router-dom"

function NavbarButton({location,content}) {
  return (
    <>
        <span className={`${style.navLink}`}>
            <NavLink to={location}>{content}</NavLink>
        </span>
    </>
  );
}

export default NavbarButton;
