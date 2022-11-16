import React from "react";
import style from "./CustomInput.module.css";

function CunstomInput({ type, value, blur, onfocus, onchange, label }) {
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
      <button className={style.submit} onClick={onclick}>
        {text}
      </button>
    </span>
  );
}

export default CunstomInput;
export { TextArea, Submit };
