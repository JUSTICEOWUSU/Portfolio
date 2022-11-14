import React from "react";
import style from "./ResumeControllers.module.css";
import { IoSchoolOutline } from "react-icons/io5";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changeResume } from "../../../../appUtils/reduxState/resumeContentState";

function ControllersButton({ content, assignClass }) {
  const dispatch = useDispatch();

  const respondToClick = () => {
    dispatch(changeResume({ content }));
  };

  return (
    <span className={style.buttonContainer} onClick={respondToClick}>
      <span className={style.content}>{content}</span>
      <span className={`${style.background} ${style[assignClass]}`}>
        {content}
      </span>
    </span>
  );
}

function ControllersIcon({ icon }) {
  return <span className={style.iconContainer}>{icon}</span>;
}

function ResumeControllers() {
  const controls = useSelector((state) => state.resume[0]);

  return (
    <div
      className={`container ${style.resumeControllersContainer} row overflow-hidden m-0 p-0`}
    >
      <div
        className={`${style.allIcons} container px-0 m-0 col-2 d-flex text-start`}
      >
        <ControllersIcon icon={<IoSchoolOutline className={style.icon} />} />
        <ControllersIcon icon={<IoCodeWorkingSharp className={style.icon} />} />
        <ControllersIcon icon={<FaProjectDiagram className={style.icon} />} />
      </div>

      <div className={`${style.allButtons} container px-0 m-0 col-10 d-flex`}>
        <ControllersButton
          content={"education"}
          assignClass={controls.education}
        />
        <ControllersButton
          content={"programming"}
          assignClass={controls.programming}
        />
        <ControllersButton
          content={"projects"}
          assignClass={controls.projects}
        />
      </div>
    </div>
  );
}

export default ResumeControllers;
