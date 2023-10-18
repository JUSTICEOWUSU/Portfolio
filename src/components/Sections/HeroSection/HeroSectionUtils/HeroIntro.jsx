import React from "react";
import Typed from "react-typed";
import style from "./HeroIntro.module.css";
import CustomButton from "../../../CustomButton/CustomButton";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare, FaGithub } from "react-icons/fa";
import IconButton from "../../../CustomButton/IconButton/IconButton";

function HeroIntro() {
  const customStyle = {
    background: "var(--primary)",
    color: "#fff",
    width: "100%",
    borderRadius: "3px",
    border:"0px",
    padding: "10px",
   fontSize:"1.5rem",
  };

  return (
    <div className={`container  ${style.heroIntroContainer}`}>
      <div className={`container ${style.introductionContainer}`}>
        <p className={`${style.intro}`}>
          Hello 👋🏿, <br />{" "}
          <h2 className={`${style.allName}`}>
            I'm <span className={style.name}>Justice Owusu</span>
          </h2>
          <span className={style.title}>
            <Typed
              strings={[
                "Fullstack Dev",
                "Javascript Dev💻",
                "Node.JS Dev",
                "React.JS Dev",
              ]}
              typeSpeed={90}
              startDelay={0}
              backSpeed={60}
              backDelay={100}
              loop
              showCurser
              autoInsertCss
              curserChar={"|"}
            />
          </span>
          <span className={`${style.description}`}>
            I'm a passionate developer skilled in creating web applications that
            seamlessly blend frontend and backend functionalities. I specialize
            in crafting functional and visually appealing websites using the
            latest tools. I'm driven by a constant desire to learn and take on
            new challenges, all with the aim of delivering exceptional user
            experiences.
          </span>
        </p>

        <span className={`${style.buttons}`}>
          {" "}
          
          <a href="#resume">
            <CustomButton text={"Download Resume"} bstyle={customStyle} />
          </a>
        </span>

        <span className={`${style.IconsCont}`}>
          <span className={`container row p-0 g-0`}>
            <IconButton
              text={"twitter"}
              link={"#"}
              component={<BsTwitter className={`${style.twitter}`} />}
            />
            <IconButton
              text={"Instagram"}
              link={"#"}
              component={<FaInstagramSquare className={`${style.insta}`} />}
            />
            <IconButton
              text={"github"}
              link={"#"}
              component={<FaGithub className={`${style.github}`} />}
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default HeroIntro;
