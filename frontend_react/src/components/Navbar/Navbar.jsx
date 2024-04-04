import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { client } from "../../client";

import "./Navbar.scss";
// import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [classFloat, setClassFloat] = useState("");
  const [active, setActive] = useState("");
  const [resume, setResume] = useState("");
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavBar);
    const aboutMeQuery = `*[_type == "aboutme"][0]{
      "resumeUrl": resume.asset -> url
    }`;
    client.fetch(aboutMeQuery).then((data) => {
      setResume(data);
    });
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        console.log(lastHash.current);
        const el = document.getElementById(lastHash.current);
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
        lastHash.current = "";
      }, 100);
    }
    return () => {
      window.removeEventListener("scroll", stickNavBar);
    };
  }, [location]);

  const stickNavBar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 50) {
        setClassFloat("navbar-float");
      } else {
        setClassFloat("");
      }
    }
  };

  const viewResumeHandler = () => {
    window.open(resume.resumeUrl, "_blank");
  };

  return (
    <nav id="navbar-menu" className={`app__navbar ${classFloat}`}>
      <div className="app__navbar-logo">
        <img src={images.logo2} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[
          { name: "home", href: "home" },
          { name: "about", href: "about" },
          { name: "work", href: "work" },
          { name: "skills", href: "skills" },
          { name: "story", href: "experiences-journey" },
          { name: "contact", href: "contact" },
        ].map((item) => (
          <li
            key={`link-${item.name}`}
            className={`app__flex p-text ${
              active === item.name ? "active" : ""
            }`}
          >
            <a
              className="app__navbar-link"
              href={`#${item.href}`}
              onClick={(e) => {
                setActive(item.name);
                // scrollWithOffset(item.href, e);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="navbar-button" onClick={viewResumeHandler}>
        Resume
      </button>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                { name: "home", href: "home" },
                { name: "about", href: "about" },
                { name: "work", href: "work" },
                { name: "skills", href: "skills" },
                { name: "story", href: "experiences-journey" },
                { name: "contact", href: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    className="app__navbar-link"
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
