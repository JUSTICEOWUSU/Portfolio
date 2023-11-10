import React from "react";
import style from "./ResumeSection.module.css";
import {AiOutlineEye} from "react-icons/ai"
import {BiCodeAlt} from "react-icons/bi"


function ProjectCard({site,code,name,tools,description}){
  return (
    <div className={`${style.projectContainer}`}>
      <h2 className={`${style.projectTitle}`}>{name}</h2>
      <h3 className={`${style.projectTools}`}>{tools}</h3>
      <h4 className={`${style.projectDescription}`}> {description}</h4>
      <a
        href={site}
        target={"_blank"}
        rel="noopener noreferrer"
        className={`${style.EyeIcon}`}
      >
        {" "}
        <AiOutlineEye /> site
      </a>
      <a href={code} target={"_blank"} rel="noopener noreferrer">
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
      <ProjectCard
        name={"linxmarketix"}
        tools={"react + node js + bootstrap + express js "}
        description={"Agency app for effortless digital marketing"}
        site={"https://linxmarketix.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/LINXMARKETIX"}
      />
      <ProjectCard
        name={"nasa mission control"}
        tools={"nodejs + express + mongo db"}
        description={"Mission control api for Nasa space exploration"}
        site={"https://nasa-mission-control-api.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/NASA-MISSION-CONTROL-API"}
      />

      <ProjectCard
        name={"justice clothing"}
        tools={"typescript + nodejs + css module"}
        description={"E-commerce app for seamless online shopping "}
        site={"https://justice-clothing.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/Justice-clothing"}
      />
    </div>
  );
}

export default ResumeSection;
