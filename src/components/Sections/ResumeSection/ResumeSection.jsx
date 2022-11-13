import React from "react";
import style from "./ResumeSection.module.css";
import ResumeControllers from "./ResumeSectionUtils/ResumeControllers";
import EducationContent from "./ResumeSectionUtils/EducationContent";
function ResumeSection() {
  return (
    <div
      className={`${style.resumeSectionContainer} container-fluid text-center text-white my-5 py-5`}
    >
      <h1 className={`${style.title} m-auto text-center`}> Resume</h1>
      <span className={style.subTitle}>Formal Bio Details</span>
      <div
        className={`container row overflow-hidden g-0 px-lg-0 ${style.resumeContainer}`}
      >
        <div className={` container m-0 p-0 col-lg-4 col-md-4 col-sm-12 g-0`}>
        <ResumeControllers/>
        </div>

        <div className={` container m-0 p-0 col-lg-8 col-md-8 g-0 col-sm-12 g-0`}>
          <EducationContent/>
        </div>
        
      </div>
    </div>
  );
}

export default ResumeSection;
