import React from "react";
import style from "./AboutSectionImage.module.css";

function AboutSectionImage() {
  return (
    <div
      className={` container col-lg-6 col-md-6 col-sm-12 ${style.aboutImageContainer}`}
    >
      <div className={`${style.imageContainer} d-flex align-items-center`}>
        <span className={`${style.imageSpan}`}>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_k86wxpgr.json"
            background="transparent"
            speed="1"
            style={{width:"300px", height:"300px"}}
            loop
            autoplay
          ></lottie-player>
        </span>
      </div>
    </div>
  );
}

export default AboutSectionImage;
