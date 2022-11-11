import React from "react";
import style from "./SmallScreenNav.module.css";
import { HiOutlineBars2 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";

function SmallScreenNav({ onclick }) {
  const nav = useSelector((state) => state.navbar);
  
  return (
    <div className={ ` container-fluid ${ style.smallNavContainer } ` }>
      <div className={ `d-flex ${style.smallNav}` }>
        <span className={ style.title }> JUSTICE OWUSU </span>
        <span onClick={ onclick } className={ style.iconsContainer }>
          {nav[0].navbar ? (
            <GrClose className={ style.icon } />
          ) : (
            <HiOutlineBars2 className={ style.icon } size="1.8rem"/>
          )}
        </span>
      </div>
    </div>
  );
}

export default SmallScreenNav;
