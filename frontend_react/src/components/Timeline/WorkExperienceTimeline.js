import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import { urlFor } from "../../client";

import parse from "html-react-parser";

function WorkExperienceTimeline(props) {
  const skillVariants = {
    view: {
      x: [0, 0],
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
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <VerticalTimeline lineColor='#000099' animate={true}>
      {props.experiences?.map((exp, index) => (
        <VerticalTimelineElement
          key={exp.order}
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#edf2f8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #000099' }}
          date={exp.year}
          dateClassName="secondary-color"
          iconClassName='app__experiences-item app__flex d-flex'
          iconStyle={{ background: 'white' }}
          icon={
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              key={exp.name + "-" + index}
            >
              <div
                className="app__flex app"
              >
                <img style={{ objectFit: "contain" }} src={urlFor(exp.logoUrl)} alt={exp.name} />
              </div>
            </motion.div>}
        >
          <motion.div
            whileInView={{
              opacity: [0, 1],
              x: [-100, 5, 0],
            }}
            transition={{
              duration: 1,
            }}
            className="app__skills-exp-work"
            data-tip
            data-for={exp.name}
          >
            <h4 className="bold-text vertical-timeline-element-title">{exp.name}</h4>
            <p className="p-text vertical-timeline-element-subtitle ">{exp.company}</p>
          </motion.div>
          {exp?.works?.map((work) => (
            <React.Fragment key={work.order} >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  x: [-100, 5, 0],
                }}
                transition={{
                  duration: 1,
                }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
              >
                {work.name && work.name !== "" && <h4 className="bold-text vertical-timeline-element-title mt-3">{work.name}</h4>}
                {work.company && work.company !== "" && <p className="p-text vertical-timeline-element-subtitle">{work.company}</p>}
                <div
                  id={work.name}
                  className="skills-tooltip p-text mt-3"
                >
                  {parse(work.desc)}
                </div>
              </motion.div>

            </React.Fragment>

          ))}
        </VerticalTimelineElement>
      )
      )}
    </VerticalTimeline>
  )
}

export default WorkExperienceTimeline
