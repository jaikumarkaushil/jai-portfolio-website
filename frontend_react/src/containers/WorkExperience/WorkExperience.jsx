import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./WorkExperience.scss";

const WorkExperience = () => {
  const [workExp, setWorkExperience] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const brandsQuery = "*[_type == 'brands']";
    const workExperienceQuery = "*[_type == 'workExperience']";

    client.fetch(workExperienceQuery).then((workExperienceData) => {
      setWorkExperience(workExperienceData);
    });

    client.fetch(brandsQuery).then((brandsData) => {
      setBrands(brandsData);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const workExperience = workExp[currentIndex];

  return (
    <>
      <h2 className="head-text">
        See what <span>Others</span> say about me!
      </h2>
      {workExp.length && (
        <>
          <div className="app__workExperience-carousel app__flex">
            <img
              src={urlFor(workExperience.imgUrl)}
              alt={workExperience.name}
            />
            <div className="app__workExperience-content">
              <p className="p-text">{workExperience.desc}</p>
              <div>
                <h4 className="bold-text">{workExperience.name}</h4>
                <h5 className="p-text">{workExperience.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__workExperience-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? workExperience.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === workExperience.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__workExperience-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(WorkExperience, "app__workExperience app__flex"),
  "workExperience",
  "app__primarybg",
  "app__flex"
);
