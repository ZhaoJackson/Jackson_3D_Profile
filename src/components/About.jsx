import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { about } from "../data";
import "./About.scss";

const focusAreas = [
  "Mental Health AI",
  "LLM Fine-Tuning",
  "Responsible AI",
  "Data Science",
  "Social Impact Tech",
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="about-panel mt-6 text-secondary text-[17px] w-full"
      >
        <div className="about-panel__header">
          <span className="about-kicker">{about.title}</span>
          <span className="about-badge">Research → Impact</span>
        </div>

        <p className="about-lead">
          {about.description1}
        </p>

        <p className="about-copy">{about.description2}</p>
        <p className="about-copy">{about.description3}</p>
        <p className="about-copy">{about.description4}</p>

        <div className="about-focus">
          {focusAreas.map((item) => (
            <span key={item} className="about-focus-chip">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "");
