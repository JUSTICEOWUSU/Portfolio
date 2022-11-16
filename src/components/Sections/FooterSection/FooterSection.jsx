import React from 'react'
import style from "./FooterSection.module.css"

function FooterSection() {
  return (
    <div id="footer" className={`container-fluid ${style.footerContainer}`}>
        <span className={style.fTitle}>ju <br/> ow</span>
        <span className={style.oTitle}>justicelearner2021@gmail</span>
    </div>
  )
}

export default FooterSection