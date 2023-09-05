import React from 'react'

// React Slick Carousel
import Slider from "react-slick";
import { urlFor } from "../../client";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

function SkillsCarousel(props) {
  const bannerImageSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    lazyLoad: 'progressive',
    accessibility: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767.9,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          pauseOnHover: false,
        }
      },
      {
        breakpoint: 991.9,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 4,
          slidesToScroll: 1,
          pauseOnHover: false,
        }
      },
    ]
  };

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Slider {...bannerImageSettings} className={`${props.className}`}>
      {props.skills.map((skill, index) => {
        return (
          <motion.div
            variants={skillVariants}
            whileInView="view"
            whileHover="hover"
            whileTap="tap"
            className="app__skills-item app__flex d-flex w-auto"
            key={skill.name + "-" + index}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img style={{ objectFit: "contain" }} src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        )
      })}
    </Slider>
  )
}

export default SkillsCarousel
