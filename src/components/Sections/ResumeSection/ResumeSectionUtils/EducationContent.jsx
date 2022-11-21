import React from "react";
import style from "./EducationContent.module.css";

function EducationSub({ target, href, achievement, place, duration }) {
  return (
    <div className={`${style.EduSubContainer}`}>
      <span>
        <h4 className={style.title}>
          <a href={href} target={target}>
            {achievement}
          </a>
        </h4>
        <span className={style.description}> {place}</span>
      </span>

      <span className={style.duration}>{duration}</span>
    </div>
  );
}

const myCert = "https://freecodecamp.org/certification/JOWUSU60/javascript-algorithms-and-data-structures";

function EducationContent() {
  return (
    <div className={`container m-0 ${style.mainContainer}`}>
      <EducationSub
        target={"blank"}
        href={myCert}
        achievement={"freeCodeCamp"}
        place={"JavaScript Algorithms and Data Structures certificate"}
        duration={"2022"}
      />
      <EducationSub
        achievement={"kwame nkrumah university of science & technology"}
        place={"bachelor of science in geomatic engineering"}
        duration={"2020-2024"}
      />
      <EducationSub
        achievement={"sunyani senior high school"}
        place={"west africa senior school certificate"}
        duration={"2017-2020"}
      />
      <EducationSub
        achievement={"sanzule/Krisan d/A school"}
        place={"basic education certificate"}
        duration={"9 years"}
      />
    
    </div>
  );
}

export default EducationContent;
export {
  EducationSub,
  myCert
}