import React from 'react'
import HeroSection from '../components/Sections/HeroSection/HeroSection'
import AboutSection from '../components/Sections/AboutSection/AboutSection'
import ResumeSection from '../components/Sections/ResumeSection/ResumeSection'
import ContactMeSection from '../components/Sections/ContactMeSection/ContactMeSection'
import FooterSection from '../components/Sections/FooterSection/FooterSection'

function AppPage() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ResumeSection/>
    <ContactMeSection/>
    <FooterSection/>
    </>
  )
}

export default AppPage