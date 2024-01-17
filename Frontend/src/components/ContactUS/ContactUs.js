import React, { useState, useRef } from "react";
import "../ContactUS/ContactUs.css";
import call from "../../Images/call.jpg";
import mail from "../../Images/mail.jpg";
import location from "../../Images/location.png";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zybciaf",
        "template_i56vie8",
        form.current,
        "_0voTjGHL39qUKT34"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactmain">
      <h2 style={{color:"white"}}>Contact Us</h2>
      <div className="contactsub">
        <div className="phone" style={{marginTop: "10%"}}>
          <h3 style={{color:"white"}}>
            <img src={call} alt="" className="imageicon" /> Phone no: 480-764-8126
          </h3>
          <h3 style={{color:"white"}}>
            <img src={mail} alt="" className="imageicon" /> Email: SSSH@northeasterm.edu
          </h3>
          <h3 style={{color:"white"}}>
            <img src={location} alt="" className="imageicon" /> Address: 360, Huntington Avenue, Boston.
          </h3>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contactform">
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="sendbtn" style={{width:"fit-content", marginLeft:"2.5rem"}}/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
