import React, { useMemo, useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../data";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Randomly pick 12 for 3-D balls on desktop
  const displayedTech = useMemo(() => {
    const shuffled = [...technologies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tools</h2>
      </motion.div>

      {isMobile ? (
        /* ── Mobile: flat icon grid (zero extra WebGL contexts) ── */
        <div className="flex flex-row flex-wrap justify-center gap-5 mt-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              style={{
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "0.75rem",
                background: "rgba(7,21,40,0.7)",
                border: "1px solid rgba(100,175,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.45rem",
                backdropFilter: "blur(6px)",
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      ) : (
        /* ── Desktop: 3-D spinning balls ── */
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
          {displayedTech.map((tech) => (
            <div style={{ height: "5rem", width: "5rem" }} key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
