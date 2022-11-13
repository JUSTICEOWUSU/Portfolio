import React from "react";
import style from "./EducationContent.module.css";

function EducationSub({target,href,achievement, place, duration}) {
  return (
    <div className={`${style.EduSubContainer}`}>
      <span >
        <h4 className={style.title}>
          <a href={href} target={target}>{achievement}</a>
        </h4>
        <span className={style.description}> {place}</span>
      </span>

      <span className={style.duration}>{duration}</span>
    </div>
  );
}

const myCert = "https://freecodecamp.org/certification/JOWUSU60/javascript-algorithms-and-data-structures";

function EducationContent() {
  return <div className={`container m-0 ${style.mainContainer}`}>
    <EducationSub target={"blank"} href={myCert} achievement={"JavaScript Algorithms and Data Structures certificate"} place={"freeCodeCamp"} duration={"2022"}/>
    <EducationSub/>
    <EducationSub/>
    <EducationSub/>
    <EducationSub/>
  </div>;
}

 
export default EducationContent;
