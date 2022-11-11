import React from "react";
import style from "./HeroImage.module.css";

function HeroImage() {
  return (
    <div className={`container col-lg-6 col-md-6 col-sm-12 `}>
      <div className={`container ${style.heroImageContainer}`}>
        
          <span className={`${style.imageSpan}`}>
            <img
              src="https://resizing.flixster.com/7QBettiB2nSWETGnXjBg4Z_mJvw=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p14264210_i_h9_ad.jpg"
              alt="profile"
            />
          </span>
       
      </div>
    </div>
  );
}

export default HeroImage;
