import React from "react";
import style from "./HeroIntro.module.css";
import CustomButton from "../../../CustomButton/CustomButton";

function HeroIntro() {

    const hireMeStyle = {
        background: "var(--other)",
        color: "#000",
        borderRadius: "6px",
      }

  return (
    <div className={`container col-lg-6 col-md-6 col-sm-12 ${style.heroIntroContainer}`}>
      <div className={`container ${style.introductionContainer}`}>
        <p className={`${style.intro}`}>
          Hello, I'm <span className={style.name}>Justice Owusu</span>
          <br />
          <span className={style.title}>Fullstack Developer</span>
          <br />
          <span className={`${style.description}`}>
            Proneness to building application with both front end and backend
            functionalities
          </span>
        </p>

        <span className={`${style.buttons}`}>
          {" "}
          <CustomButton
            text={"Hire me"}
            animate={"animate"}
            bstyle={hireMeStyle}
          />{" "}
          <CustomButton text={"Get Resume"} />
        </span>
      </div>
    </div>
  );
}

export default HeroIntro;
