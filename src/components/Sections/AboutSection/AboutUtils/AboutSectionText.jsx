import React from "react";
import style from "./AboutSectionText.module.css";

function AboutSectionText() {
  return (
    <div className={`col-lg-6 col-md-6 col-sm-12`}>
      <div className={`container ${style.aboutMe}`}>
        <p className={`${style.aboutText}`}>
          A Fullstack Javascript developer with ground Knowledge in MERN Stack
          with Redux/toolkit, along with Proneness of developing web application
          with outmost efficiency. Great Professional with certificate from
          FreeCodeCamp and currently a Middler University student pursuing BSC
          Geomatic Engineering( Geodesy and Computer Science ). willing to be an
          asset of any freelance organization, part time job.
        </p>

        <span className={style.highlights}>
          <h4>Few highlights</h4>
          <ul>
            <li> <span>FullStack web development </span></li>
            <li> <span>Responsive and interactive Front End per design </span></li>
            <li> <span>Redux and Redux/toolkit for State management </span></li>
            <li> <span>Node JS, Express JS, MongoDB (All Back End technologies)  </span></li>
            <li> <span>GraphQL/Apollo, Socket.io </span></li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default AboutSectionText;
