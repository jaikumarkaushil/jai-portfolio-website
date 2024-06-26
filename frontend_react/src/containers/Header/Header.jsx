import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -10,
    x: 10,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};

const Header = () => {
  const { text: tagText } = useTypewriter({
    words: [
      "Fullstack Software Developer",
      "ReactJS Developer",
      "MERN STACK",
      "FERN STACK",
    ],
    typeSpeed: 100,
    loop: true,
  });

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-badge d-inline-flex d-md-none"
      >
        <div className="badge-cmp app__flex">
          <div>
            <p className="bold-text">👋 Hello, I am</p>
            <p className="head-text">Jai</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info order-2 order-md-1"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex d-none d-md-inline-flex">
            <div>
              <p className="bold-text">👋 Hello, I am</p>
              <p className="head-text">Jai</p>
            </div>
          </div>
          <div className="tag-cmp app__flex my-3">
            <p className="p-text">{tagText}</p>
            <Cursor cursorStyle="|" />
            {/* <p className="p-text">Enthusiast</p> */}
          </div>
        </div>
        <div className="badge-cpm2 app__flex mb-4 mb-md-0">
          <div className="bold-text text-center">
            Solution-driven developer striding on an unending journey of
            <span className="secondary-color"> exponential growth </span>🚀
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img order-1 order-md-2"
      >
        <motion.img
          src={images.profile}
          alt="profile_bg"
          whileInView={{ y: [-100, 0] }}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles d-none d-md-flex order-3"
      >
        {[
          images.javascript,
          images.react,
          images.node,
          images.springBoot,
          images.mysql,
          images.firebase,
        ].map((circle, index) => (
          <motion.div
            variants={headerSkillVariants}
            whileInView="visible"
            whileHover="hover"
            drag
            dragConstraints={{ left: 15, right: 15, top: 15, bottom: 15 }}
            dragElastic={0.1}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home", "", "app__flex m-0");
