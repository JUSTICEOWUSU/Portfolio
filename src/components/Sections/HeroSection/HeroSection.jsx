import React from "react";
import style from "./HeroSection.module.css";
import Navbar from "../../Navbar/Navbar";
import HeroIntro from "./HeroSectionUtils/HeroIntro";
// import HeroImage from "./HeroSectionUtils/HeroImage";

function HeroSection() {
  return (
    <div className={`container-fluid ${style.heroSection}`} id="home">
      <Navbar />

      <div className={`container overflow-hidden mx-auto`}>
        <HeroIntro />
      </div>
    </div>
  );
}

export default HeroSection;
