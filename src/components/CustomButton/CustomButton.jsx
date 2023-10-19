import React from "react";
import style from "./CustomButton.module.css";

function CustomButton({ text, bstyle, animate, onclick }) {
  return (
    <button className={ `${style.btn} ${style[animate]}` } style={ bstyle } onClick={ onclick }>
      {text}
    </button>
  );
}

export default CustomButton;
