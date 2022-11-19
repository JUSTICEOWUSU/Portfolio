import React from "react";
import Typed from "react-typed";
import style from "./HeroIntro.module.css";
import CustomButton from "../../../CustomButton/CustomButton";

function HeroIntro() {
  const customStyle = {
    background: "var(--other)",
    color: "#000",
    borderRadius: "6px",
  };

  return (
    <div
      className={`container col-lg-6 col-md-6 col-sm-12 ${style.heroIntroContainer}`}
    >
      <div className={`container ${style.introductionContainer}`}>
        <p className={`${style.intro}`}>
          Hello, I'm <span className={style.name}>Justice Owusu</span>
          <br />
          <span className={style.title}>
            <Typed
              strings={["Fullstack Developer","Javascript Developer💻","Node JS Developer","React JS Developer"]}
              typeSpeed={90}
              startDelay= {0}
              backSpeed= {60}
              backDelay= {100}
              loop
              showCurser
              autoInsertCss
              curserChar={"|"}
            />
          </span>
          <br />
          <span className={`${style.description}`}>
            Proneness to building application with both front end and backend
            functionalities
          </span>
        </p>

        <span className={`${style.buttons}`}>
          {" "}
          <a href="#contact-me">
            <CustomButton
              text={"Hire me"}
              animate={"animate"}
              bstyle={customStyle}
            />
          </a>
          {" "}
          <a href="#resume">
            <CustomButton text={"Get Resume"} />
          </a>
        </span>
      </div>
    </div>
  );
}

export default HeroIntro;
