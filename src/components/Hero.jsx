import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from 'ityped';
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";
import { kani } from "../assets";
import "./Hero.scss";

const Hero = () => {
  const textRef  = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        ' Machine Learning Engineer ',
        ' Data Alchemist ',
        ' Engineer for Mental Health ',
        ' AI Researcher ',
        ' Innovation Enthusiast ',
        ' Taichi Practitioner ',
        ' Neuroscientist ',
        ' Biomedical Engineer',
      ],
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="hero-section relative w-full h-screen mx-auto overflow-hidden">

      {/* ── Profile picture (always visible) ── */}
      <div className="imgcontainer1 absolute violet-gradient" style={{ zIndex: 2 }}>
        <img src={kani} alt="Jackson Zhao" className="object-cover" />
      </div>

      {/* ── Text + social links ── */}
      <div
        className={`head1 absolute ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{ zIndex: 2 }}
      >
        {/* Accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3b82f6]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="head2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi{" "}
            <motion.span
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              👋
            </motion.span>
            , I'm{" "}
            <span className="name text-[#60a5fa] block">Jackson Zhao</span>
          </h1>

          <h3 className="mt-2">
            <span
              ref={textRef}
              className={`${styles.heroSubText} blue-text-gradient`}
            />
          </h3>

          {/* Social links */}
          <div className="link1 mt-4">
            <a href="https://github.com/zichenzha0" target="_blank" rel="noreferrer">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/jaxonzhao/" target="_blank" rel="noreferrer">
              <ImLinkedin />
            </a>
            <a href="https://www.instagram.com/jackson_zhao_/" target="_blank" rel="noreferrer">
              <AiOutlineInstagram />
            </a>
            <a href="https://drive.google.com/drive/u/0/folders/1vs1EJTHtLCkd3ejOnqRbiPcECBInmN81" target="_blank" rel="noreferrer">
              <BiLinkAlt />
            </a>
          </div>
        </div>
      </div>

      {/* ── 3-D model: desktop only ── */}
      {!isMobile && <ComputersCanvas />}

    </section>
  );
};

export default Hero;
