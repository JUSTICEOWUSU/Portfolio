import React from 'react'
import style from "./ProgrammingContent.module.css"


function SubProgrammeContent ({language,known="85%",unknown="15%"}){
    return(
        <div className={`${style.subContainer} col-6`}>
            <h4 className={style.title}>{language}</h4>
            <div className={`d-flex ${style.barContainer}`}>
                <span style={{width:known}}className={style.known}></span>
                <span style={{width:unknown}} className={style.unknown}></span>
            </div>
        </div>
    )
}
function ProgrammingContent() {
  return (
    <div className={`row overflow-hidden g-0 p-0`}>
        <SubProgrammeContent language={"javascript"}/>
         <SubProgrammeContent language={"react js"}/>
         <SubProgrammeContent language={"node js"}/>
         <SubProgrammeContent language={"html"}/>
         <SubProgrammeContent language={"css"}/>
    </div>
   
  )
}

export default ProgrammingContent