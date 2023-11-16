import React from "react";
import {TypeAnimation} from "react-type-animation";
import style from "./HeroIntro.module.css";
import CustomButton from "../../../CustomButton/CustomButton";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import {  FaGithub } from "react-icons/fa";
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
            <TypeAnimation
              sequence={[
                "Fullstack Dev",
                1000,
                "Javascript Dev💻",
                1000,
                "Node.JS Dev",
                1000,
                "React.JS Dev",
                1000,
              ]}
              Speed={90}
              repeat={Infinity}
            />
          </span>
          <span className={`${style.description}`}>
            I'm a passionate web developer skilled in creating web applications
            that seamlessly blend frontend and backend functionalities. I
            specialize in crafting functional and visually appealing websites
            using the latest tools. I'm driven by a constant desire to learn and
            take on new challenges, all with the aim of delivering exceptional
            user experiences.
          </span>
        </p>

        <span className={`${style.buttons}`}>
          {" "}
          <a
            href="https://drive.google.com/uc?export=download&id=1YVcBY2SH4Xvfhvc2T3NRDgOmKMzDKAg-"
            download="JusticeOwusu's resume.pdf"
          >
            <CustomButton text={"Download Resume"} bstyle={customStyle} />
          </a>
        </span>

        <span className={`${style.IconsCont}`}>
          <span className={`container row p-0 g-0`}>
            <IconButton
              text={"github"}
              link={"https://github.com/JUSTICEOWUSU"}
              component={<FaGithub className={`${style.github}`} />}
            />
            <IconButton
              text={"Instagram"}
              link={"https://instagram.com/_owusudev"}
              component={<CiInstagram className={`${style.insta}`} />}
            />
            <IconButton
              text={"LinkedIn"}
              link={"https://www.linkedin.com/in/justice-owusu-43a0a1299"}
              component={<CiLinkedin className={`${style.linkedIn}`} />}
            />
            <IconButton
              text={"Twitter"}
              link={"https://twitter.com/_owusudev"}
              component={<RiTwitterXLine className={`${style.twitter}`} />}
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default HeroIntro;
