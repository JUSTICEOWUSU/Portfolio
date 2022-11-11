import React from 'react'
import style from "./AboutSection.module.css"
import AboutSectionImage from './AboutUtils/AboutSectionImage'
import AboutSectionText from './AboutUtils/AboutSectionText'


function AboutSection() {
  return (
    <div className={`container ${style.aboutSectionContainer}`}>
        <h1 className={`${style.title}`}>About Me</h1><span className={`${style.description}`}>Reason to choose</span>
        <div className={`container row overflow-hidden gx-2 ${style.aboutMeCont}`}>
            <AboutSectionImage/>
            <AboutSectionText/>

        </div>
    </div>
  )
}

export default AboutSection