import React from "react";
import style from "./CustomInput.module.css";

// contact me form input
function CustomInput({ type, value, blur, onfocus, onchange, label,required }) {
  return (
    <span className={`${style.btnContainer} `}>
      <span className={`${style.label} ${style[blur]}`}>{label}</span>
      <input
        className={style.input}
        type={type}
        onFocus={onfocus}
        value={value}
        onChange={onchange}
      />
    </span>
  );
}

// contact-me message field(textarea)
function TextArea({ placeholder, value, onchange }) {
  return (
    <span className={`${style.txtContainer} `}>
      <textarea
        className={style.textarea}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      ></textarea>
    </span>
  );
}

function Submit({ onclick, text }) {
  return (
    <span className={style.submitContainer}>
      <button className={style.submit} onClick={onclick} type="submit">
        {text}
      </button>
    </span>
  );
}

export default CustomInput;
export { TextArea, Submit };
