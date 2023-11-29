import React from "react";
import style from "./Technologies.module.css";
import { DiJavascript, DiGit } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io"
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import {  BsGithub } from "react-icons/bs";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiJquery,
  SiGraphql,
  SiTailwindcss

} from "react-icons/si";


const myArray = [
  {
    name: "HTML",
    icon: AiOutlineHtml5,
  },

  {
    name: "CSS",
    icon: IoLogoCss3,
  },

  {
    name: "javascript",
    icon: DiJavascript,
  },

  {
    name: "react.js",
    icon: FaReact,
  },

  {
    name:"tailwind css",
    icon:SiTailwindcss
  },

  {
    name: "Typescript",
    icon: SiTypescript,
  },

  {
    name: "redux",
    icon: SiRedux,
  },

  {
    name: "bootstrap",
    icon: FaBootstrap,
  },

  {
    name: "jQuery",
    icon: SiJquery,
  },

  {
    name: "node.js",
    icon: FaNodeJs,
  },

  {
    name: "express.js",
    icon: SiExpress,
  },

  {
    name: "mongoDB",
    icon: SiMongodb,
  },

  {
    name: "socket.io",
    icon: SiSocketdotio,
  },

  {
    name: "firebase",
    icon: SiFirebase,
  },

  {
    name: "graphql",
    icon: SiGraphql,
  },

  {
    name: "git",
    icon: DiGit,
  },

  {
    name: "github",
    icon: BsGithub,
  },
];

function TechSection() {
  return (
    <div className={`${style.TechSectionCont}`}>
      <h1 className={`${style.title}`}>the technologies i currently work on</h1>
      <div >
              <div className={`row g-3 g-sm-2 ${style.IconsCont}`}>
                  
                  {
                      myArray.map(object => {
                          const Comp = object.icon
                          return (
                            <span className={`col-lg-3 col-4`}
                             >
                              <div className={`${style.TechCard}`}>
                                <h6 className={`${style.TechName}`}>
                                          {
                                              object.name
                                  }
                                </h6>
                                <span>
                                  <Comp
                                    className={`${style.TechIcon}`}
                                  />
                                </span>
                              </div>
                            </span>
                          );
                      })
                  }
        </div>
      </div>
    </div>
  );
}

export default TechSection;
