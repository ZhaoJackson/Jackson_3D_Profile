import React, { useMemo, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demo, github } from "../assets"; // ensure both exist in ../assets/index.(js|ts)
import { SectionWrapper } from "../hoc";

import { list, mentalhealthAIProject, llmProject, dataScienceAnalyticsProject } from "../data";

import { fadeIn, textVariant } from "../utils/motion";
import ProjectList from "./ProjectList";
import "./Project.scss";

const LinkIconButton = ({ href, label, imgSrc }) => {
  if (!href) return null;
  const onClick = () => window.open(href, "_blank", "noopener,noreferrer");
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      <img src={imgSrc} alt={label} className="w-1/2 h-1/2 object-contain" loading="lazy" />
    </button>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags = [],
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, transform: "none" }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full"
      >
        <div className="Box1 relative w-full h-[180px]">
          <img
            src={image}
            alt={name || "project image"}
            loading="lazy"
            className="image w-full h-full object-cover rounded-2xl"
          />

          {/* Title overlay on hover */}
          <div
            className="absolute inset-0 flex justify-center card-img_hover"
            style={{ alignItems: "center" }}
          >
            <h3 className="text-black font-bold text-[16px] text-center px-2 line-clamp-2">
              {name}
            </h3>
          </div>

          {/* Action icons */}
          <div className="title absolute inset-0 flex justify-end card-img_hover">
            <LinkIconButton href={source_link} label="Open demo" imgSrc={demo} />
            <LinkIconButton
              href={source_code_link}
              label="Open source code"
              imgSrc={github /* or your drive thumbnail if you prefer */}
            />
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="content mt-5">
            <p className="mt-2 text-secondary text-[14px]" style={{ textAlign: "justify" }}>
              {description}
            </p>
          </div>
        )}

        {/* Tags */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="content mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Project = () => {
  // default to a valid category id from `list`
  const [selected, setSelected] = useState("mentalhealthAI");

  // Single source of truth: map category id -> project array
  const BUCKETS = useMemo(
    () => ({
      mentalhealthAI: mentalhealthAIProject,
      llm: llmProject,
      dataScienceAnalytics: dataScienceAnalyticsProject,
    }),
    []
  );

  // Get the current data, with fallback
  const data = BUCKETS[selected] || mentalhealthAIProject || [];

  // Handle selection change
  const handleSelect = (newSelected) => {
    setSelected(newSelected);
  };

  return (
    <>
      <motion.div whileInView={{ opacity: 1, transform: "none" }} variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="project w-full flex">
        <motion.div
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] w-full"
        >
          {/* Tabs */}
          <ul className="flex flex-wrap gap-3">
            {list.map((item) => (
              <ProjectList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={handleSelect}
                id={item.id}
              />
            ))}
          </ul>

          {/* Cards */}
          <div className="box mt-20 flex flex-wrap justify-center">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((project, index) => (
                <ProjectCard key={`${selected}-project-${index}`} index={index} {...project} />
              ))
            ) : (
              <p className="text-secondary">No projects found in this category.</p>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");