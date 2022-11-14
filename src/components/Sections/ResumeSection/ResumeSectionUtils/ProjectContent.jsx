import React from 'react'
import style from "./ProjectContent.module.css"
import {EducationSub,myCert} from "./EducationContent"



function ProjectContent() {

  return (
    <div className={`container m-0 ${style.mainContainer}`}>
        <EducationSub
        achievement={"E Commerce app"}
        place={"tecnologies- React js and node js"}
        duration={"2022"}
      />
      <EducationSub
        achievement={"nasa mission control api"}
        place={"technologies- node js, express js, mongoDB (all backend techs)"}
        duration={"2022"}
      />
      <EducationSub
        achievement={"Palindrome Checker (freeCodeCamp)"}
        place={"technologies- JavaScript"}
        duration={"2022"}
        href={myCert}
        target={"blank"}
      />
      <EducationSub
        achievement={"telephone number validator & more (freeCodeCamp)"}
        place={"technologies- JavaScript"}
        duration={"2022"}
        href={myCert}
        target={"blank"}
      />
    </div>
  )
}

export default ProjectContent