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
        // onfocus={respondToBlur}
      />
      <CustomInput
        type={"email"}
        label={"email"}
        value={email}
        blur={blur}
        onchange={respondToEmail}
        // onfocus={respondToBlur}
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
      <h1 className={`${style.title}`}>let's talk</h1>
      <div
        className={`${style.contactMeContent} container`}
      >
        
        <div className={` ${style.forms}`}>
          <ContactMeBox />
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
