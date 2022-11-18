import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactMeSection.module.css";
import CustomInput, { TextArea, Submit } from "./ContactMeUtils/CunstomInput";

function ContactMeBox() {
  const [blur, setBlur] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;


// form onchange responds
  const respondToName = (e) => {
    setName((prev) => {
      return e.target.value;
    });
  };

  const respondToEmail = (e) => {
    setEmail((prev) => {
      return e.target.value;
    });
  };

  const respondToMessage = (e) => {
    setMessage((prev) => {
      return e.target.value;
    });
  };

  const respondToBlur = () => {
    if (!blur) {
      setBlur("blur");
    }
  };

  // uses Email.js services to handle email submission
  const respondToSubmit = async (e) => {
    if(!message || !email){
      return alert("please provide email and message fields")
    }
    const template = {
      message,
      name,
      email,
    };
    
    e.preventDefault();
    // email.js
    await emailjs.send(serviceID, templateID, template, publicKey);
    setBlur("");
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <form className={`${style.contactBoxContainer}`}>
      <CustomInput
        type={"text"}
        label={"name"}
        value={name}
        blur={blur}
        onchange={respondToName}
        onfocus={respondToBlur}
      />
      <CustomInput
        type={"email"}
        label={"email"}
        value={email}
        blur={blur}
        onchange={respondToEmail}
        onfocus={respondToBlur}
        required={"true"}
      
      />
      <TextArea
        placeholder={"Type your message here"}
        value={message}
        onchange={respondToMessage}

      />
      <Submit text={"send mail"} onclick={respondToSubmit} />
    </form>
  );
}

function ContactMeSection() {
  return (
    <div
      id="contact-me"
      className={`container-fluid ${style.contactMeContainer}`}
    >
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
