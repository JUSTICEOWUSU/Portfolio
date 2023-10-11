import React from 'react'
import style from './App.module.css'
import HeroSection from '../components/Sections/HeroSection/HeroSection'
import AboutSection from '../components/Sections/AboutSection/AboutSection'
import ResumeSection from '../components/Sections/ResumeSection/ResumeSection'
import ContactMeSection from '../components/Sections/ContactMeSection/ContactMeSection'
import FooterSection from '../components/Sections/FooterSection/FooterSection'

function AppPage() {
  return (
    <div className={`${style.App}`}>
      <HeroSection />
      <div className={`${style.content}`}>
    <AboutSection/>
    <ResumeSection/>
    <ContactMeSection/>
    <FooterSection/>
      </div>
    </div>
  )
}

export default AppPage