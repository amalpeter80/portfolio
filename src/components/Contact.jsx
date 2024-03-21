import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/amal_.ppete.r?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/amal-peter-059559266/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          
          <a href="https://github.com/amalpeter80" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
