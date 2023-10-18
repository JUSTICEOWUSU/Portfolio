import React from "react";
import style from "./ResumeSection.module.css";
import {AiOutlineEye} from "react-icons/ai"
import {BiCodeAlt} from "react-icons/bi"


function ProjectCard({site,code,name,tools,description}){
  return (
    <div className={`${style.projectContainer}`}>
      <h2 className={`${style.projectTitle}`}>{name}</h2>
      <h3 className={`${style.projectTools}`}>{ tools}</h3>
      <h4 className={`${style.projectDescription}`}> {description}</h4>
      <a href={site} className={`${style.EyeIcon}`}>
        {" "}
        <AiOutlineEye /> site
      </a>
      <a href={code}>
        {" "}
        <BiCodeAlt /> code
      </a>
    </div>
  );
}

function ResumeSection() {
  return (
    <div
      id="resume"
      className={`${style.resumeSectionContainer} container-fluid text-center text-white my-5`}
    >
      <h1 className={`${style.title}`}>projects</h1>
      <ProjectCard  name={"agency app"} tools={"react + node js + bootstrapp + express js "} description={"Agency app for effortless digital marketing"}/>
      <ProjectCard name={"e-commerce app"} tools={"typescript + nodejs + css module"} description={"E-commerce app for seamless online shopping "}/>
      <ProjectCard name={"nasa mission control api"} tools={"nodejs + express + mongo db"} description={"Mission control api for Nasa space exploration"}/>
    </div>
  );
}

export default ResumeSection;
