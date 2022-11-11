import React from "react";
import style from "./Navbar.module.css";
import NavbarButton from "./NavbarUtils/NavbarButton";
import SmallScreenNav from "./NavbarUtils/SmallScreenNav";
import { useSelector,useDispatch } from "react-redux";
import{mobile} from "../../appUtils/reduxState/navbarState"

function Navbar() {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.navbar)[0].navbar;

  const respondToClick = ()=>{
    return dispatch(mobile())
  }

  return (
    <>
      <div className={`container-fluid ${style.navbar} ${style[nav]}`}>
        <span className={style.navbarTitle}>{"JUSTICE"}<span style={{color:"#f7990eef"}}>{"_</>"}</span></span>

        <div className={`container d-flex ${style.navbar1}`}>
          <NavbarButton content={"home"} />
          <NavbarButton content={"about me"} />
          <NavbarButton content={"resume"} />
          <NavbarButton content={"contact me"} />
        </div>
      </div>
      <SmallScreenNav onclick={respondToClick}/>
    </>
  );
}

export default Navbar;
