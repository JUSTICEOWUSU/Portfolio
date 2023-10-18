import React from 'react'
import style from './App.module.css'
import HeroSection from '../components/Sections/HeroSection/HeroSection'
import ResumeSection from '../components/Sections/ResumeSection/ResumeSection';
import ContactMeSection from '../components/Sections/ContactMeSection/ContactMeSection';
import TechSection from "../components/Sections/Technologies/Technologies";
import AboutSection from '../components/Sections/AboutSection/AboutSection';

function AppPage() {
  return (
    <div className={`${style.App} row px-sm-0`}>
      <div className={` ${style.Hero} col-lg-6 col-12 ms-md-0 px-sm-0 m-sm-0`}>
        <HeroSection />
      </div>
      <div className={`${style.content} col-lg-6 col-12`}>
        <ResumeSection />
        <AboutSection />
        <TechSection />
        <ContactMeSection />
      </div>
    </div>
  );
}

export default AppPage