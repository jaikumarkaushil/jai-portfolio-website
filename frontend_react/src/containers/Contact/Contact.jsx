import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // const [formError, setFormError] = useState({status: false,message: ""})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: "contact",
      from_name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(process.env);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        contact,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          setIsLoading(false);
          setIsFormSubmitted(false);
          console.log(error.message);
        }
      );

    delete contact.from_name;
    contact.name = name;

    client.create(contact).then((data) => {
      console.log("Successfully created contact in Sanity database.");
    });
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jaikumarkaushil@gmail.com" className="p-text">
            jaikumarkaushil@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 7827781849" className="p-text">
            +1 (782) 778-1849
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit} className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className=" portfolio-button">
            {loading ? "Sending Message" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
