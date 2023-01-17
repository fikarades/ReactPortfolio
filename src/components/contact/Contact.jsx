import React, { useRef } from "react";
import "./Contact.css";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
// import {CgMail} from 'react-icons/cg';
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v8tscf5', 'template_c3qrpc6', form.current, 'o-QFEcFrLawBhiuYm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>fikarades03@gmail.com</h5>
              <a href="fikar:fikarades07@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <FiInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <h5>@fikharr_ade</h5>
              <a href="https://www.instagram.com/fikharr_ade/">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+62123456789</h5>
              <a href="https://api.whatsapp.com/send?phone+6285290121060">
                Send a message
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="7"
            ></textarea>
            <input type="submit" className="btn btn-primary" value="Send Message" />
              
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
