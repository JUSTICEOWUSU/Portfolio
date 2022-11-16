import React,{ useState } from "react";
import style from "./ContactMeSection.module.css";
import CustomInput, { TextArea, Submit } from "./ContactMeUtils/CunstomInput";

function ContactMeBox() {
  const [blur,setBlur] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const [email,setEmail] = useState("");

  const respondToName = (e)=>{
    setName(prev=>{
      return e.target.value
    })
  }

  const respondToEmail = (e)=>{
    setEmail(prev=>{
      return e.target.value
    })
  }

  const respondToMessage = (e)=>{
    setMessage(prev=>{
      return e.target.value
    })
  }

  const respondToBlur = ()=>{
    if(!blur){
      setBlur("blur")
    }
  }

  const respondToSubmit = ()=>{
    setBlur("")
    setEmail("")
    setName("")
    setMessage("")
    }

  return (
    <div className={`${style.contactBoxContainer}`}>
      <CustomInput
      label={"name"}
      value={name}
      blur={blur}
      onchange={respondToName}
      onfocus={respondToBlur}

      />
      <CustomInput
      label={"email"}
      value={email}
      blur={blur}
      onchange={respondToEmail}
      onfocus={respondToBlur}


       />
      <TextArea 
        placeholder={"Type your message here"}
        value={message}
        onchange={respondToMessage}

      />
      <Submit 
        text={"submit"}
        onclick={respondToSubmit}
      />
    </div>
  );
}

function ContactMeSection() {
  return (
    <div className={`container-fluid ${style.contactMeContainer}`}>
      <h1 className={`${style.title}`}>Contact Me</h1>
      <div
        className={`${style.contactMeContent} container row overflow-hidden gx-0`}
      >
        <div className={`col-lg-6 col-md-6 px-sm-0 mx-sm-0 gx-2`}>
          <div className={` ${style.contentContainer}`}>
            <h4 className={`${style.cTitle}`}>Let's Talk</h4>
            <span className={style.content}>
              Do you have some big ideas and need help bringing them to fruition
              for your business? Then please reach out, I would love to hear
              more about you, your project and how I can help!
            </span>
            <h3 className={`${style.cEmail}`}>Email</h3>
            <span className={style.content}>justicelearner2021@gmail.com</span>
          </div>
        </div>

        <div className={`col-lg-6 col-md-6 ${style.forms}`}>
          <ContactMeBox />
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
