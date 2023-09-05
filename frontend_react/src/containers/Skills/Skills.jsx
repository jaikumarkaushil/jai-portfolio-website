import React, { useState, useEffect } from "react";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Skills.scss";
import SkillsCarousel from "../../components/Carousel/SkillsCarousel";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="skills"] | order(proficiency desc)';
    client.fetch(skillsQuery).then((skillsData) => {
      setSkills(skillsData);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Skills</span> Earned
      </h2>
      <SkillsCarousel skills={skills} className="w-100 mb-5" />
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg skills-height-fix",
  "app_skills_width"
);
