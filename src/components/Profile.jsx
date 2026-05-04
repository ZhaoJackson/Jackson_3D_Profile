import React from "react";

import { SectionWrapper } from "../hoc";
import { profiles } from "../data";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications
        </h2>
      </motion.div>
    <div className='my-skills'>
      {profiles.map((profile, index) => (
        <div key={`profile-${index}`} className="skill" data-aos="fade-up" data-aos-delay="200">
        <div className="icon-container">
          <a href={profile.link} target="_blank" rel="noopener noreferrer">
            <img src={profile.icon} alt={`certification-${index}`} />
          </a>
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Profile, "");