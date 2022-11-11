import React from 'react';
import style from "./ResumeSection.module.css";

function ResumeSection() {
  return (
    <div className={`${style.resumeSectionContainer} container-fluid text-center text-white`}>
        <h1 className={`${style.title}`}> Resume</h1>
        <div className={`container row overflow-hidden m-auto gx-2`}>

        </div>
    </div>
  )
}

export default ResumeSection