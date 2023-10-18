import React from 'react'
import style from "./AboutSection.module.css"
import AboutSectionText from './AboutUtils/AboutSectionText'

function AboutSection() {
  return (
    <div id="about" className={`container ${style.aboutSectionContainer}`}>
        <h1 className={`${style.title}`}>About</h1>
        <div className={`container ${style.aboutMeCont}`}>
            <AboutSectionText/>
        </div>
    </div>
  )
}

export default AboutSection