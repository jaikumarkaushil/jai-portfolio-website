import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";

import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [aboutMe, setAboutMe] = useState({});
  useEffect(() => {
    const aboutsQuery = '*[_type == "abouts"] | order(index)';
    const aboutMeQuery = `*[_type == "aboutme"][0]{
      profileImg,
      description,
      "resumeUrl": resume.asset -> url,
      resume2,
      question,
      quesAnswer
    }`;
    client.fetch(aboutsQuery).then((data) => {
      setAbouts(data);
    });
    client.fetch(aboutMeQuery).then((data) => {
      setAboutMe(data);
    });
  }, []);

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };

  return (
    <>
      <h2 className="head-text">
        Making <span>technology</span> work for <span>Everyone</span>,
        <br />
        not just for <span>tech-savvy</span>.
        <br />
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={
                aboutMe.profileImg
                  ? urlFor(aboutMe.profileImg)
                  : images.aboutmine
              }
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex px-2">
          <h2 className="head-text mt-4 mt-lg-0">A little story about me</h2>
          <p className="about-desc">
            {aboutMe.description && parse(aboutMe.description)}
          </p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="app__profiles">
        <div className="row">
          {abouts.map((about) => (
            <div className="col-md-6 col-xl-3 col-xs-12 mb-5" key={about.index}>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.2, type: "tween" }}
                className="app__profile-item"
                key={about.index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <div className="about-box">
                  <h2 className="bold-text" style={{ marginTop: "20px" }}>
                    {about.title}
                  </h2>
                  <h2 className="p-text" style={{ marginTop: "10px" }}>
                    {about.description}
                  </h2>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about app__flex"),
  "about",
  "app__whitebg",
  "app__flex"
);
