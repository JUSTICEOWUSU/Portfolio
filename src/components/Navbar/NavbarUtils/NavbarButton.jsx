import React from "react";
import style from "./NavbarButton.module.css"

// buttons for the navigation bar
function NavbarButton({location,content,onclick}) {
  return (
        <span className={`${style.navLink}`}>
            <a href={location} onClick={onclick}>{content}</a>
        </span>
  );
}

export default NavbarButton;
