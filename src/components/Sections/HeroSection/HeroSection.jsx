import React from "react";
import style from "./HeroSection.module.css";
import Navbar from "../../Navbar/Navbar";
import HeroIntro from "./HeroSectionUtils/HeroIntro";
import HeroImage from "./HeroSectionUtils/HeroImage";

function HeroSection() {
  return (
    <>
      <Navbar />

      <div className={`container-fluid ${style.heroSection}`} id="home">
        <div className={`container row overflow-hidden g-2 mx-auto`}>
         
        <HeroIntro/>
        <HeroImage/>
          
        </div>
      </div>
    </>
  );
}

export default HeroSection;
