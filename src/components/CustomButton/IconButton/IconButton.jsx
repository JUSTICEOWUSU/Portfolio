import React from "react";
import style from "./IconButton.module.css"
// import { BsTwitter } from "react-icons/bs"


function IconButton({text,link,component}) {
    return (
 <span className={`col-4`}>
         <a href={`${link}`} className={`${style.socialIcon}`}>
          {component}
                <span className={`${style.IconText}`}>{ text}</span>
        </a>
        </span>       
    )
}

export default IconButton
