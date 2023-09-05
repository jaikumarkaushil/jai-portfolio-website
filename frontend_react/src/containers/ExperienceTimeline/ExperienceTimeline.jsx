import React, { useState, useEffect } from "react";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./ExperienceTimeline.scss";
import WorkExperienceTimeline from "../../components/Timeline/WorkExperienceTimeline";

const ExperienceTimeline = () => {
  const [experience, setExperience] = useState();

  useEffect(() => {
    const experienceQuery = '*[_type=="experiences"] | order(order)';
    client.fetch(experienceQuery).then((experienceData) => {
      setExperience(experienceData);
    });
  }, []);

  return (
    <div className="py-2">
      <h2 className="head-text mb-3">
        My <span>Professional </span>Journey
      </h2>
      {experience && <WorkExperienceTimeline experiences={experience} />}
    </div>
  );
};

export default AppWrap(
  MotionWrap(ExperienceTimeline, "app__skills"),
  "experiences-journey",
  "app__primarybg",
  ""
);
