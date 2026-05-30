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

const TYPING_STRINGS = [
  ' Machine Learning Engineer ',
  ' Data Alchemist ',
  ' Engineer for Mental Health ',
  ' AI Researcher ',
  ' Innovation Enthusiast ',
  ' Taichi Practitioner ',
  ' Neuroscientist ',
  ' Biomedical Engineer',
];

const SocialLinks = () => (
  <div className="link1 mt-4">
    <a href="https://github.com/zichenzha0" target="_blank" rel="noreferrer">
      <AiOutlineGithub />
    </a>
    <a href="https://www.linkedin.com/in/zichenzha0/" target="_blank" rel="noreferrer">
      <ImLinkedin />
    </a>
    <a href="https://www.instagram.com/jackson_zhao_/" target="_blank" rel="noreferrer">
      <AiOutlineInstagram />
    </a>
    <a href="https://drive.google.com/drive/u/0/folders/1vs1EJTHtLCkd3ejOnqRbiPcECBInmN81" target="_blank" rel="noreferrer">
      <BiLinkAlt />
    </a>
  </div>
);

const WavingHand = () => (
  <motion.span
    animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
    transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
    style={{ display: "inline-block" }}
  >
    👋
  </motion.span>
);

const Hero = () => {
  const textRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  /* ─── Mobile breakpoint detection ─── */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ─── ityped — re-initialise whenever layout switches ─── */
  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, { showCursor: true, strings: TYPING_STRINGS });
    }
  }, [isMobile]);

  return (
    <section
      className="hero-section relative w-full mx-auto overflow-hidden"
      style={{ minHeight: '100vh', height: isMobile ? 'auto' : '100vh' }}
    >
      {/* ── Profile picture (absolute, always top-right) ── */}
      <div className="imgcontainer1 absolute violet-gradient" style={{ zIndex: 2 }}>
        <img src={kani} alt="Jackson Zhao" className="object-cover" />
      </div>

      {isMobile ? (
        /* ════════════════════════════════════════════════
           MOBILE LAYOUT
           Flow layout: text → social links → 3-D canvas
           ════════════════════════════════════════════════ */
        <div className="hero-mobile-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="flex flex-row items-start gap-4">
            {/* Accent line */}
            <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-[#3b82f6]" />
              <div className="w-1 h-32 violet-gradient" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi <WavingHand />, I'm{" "}
                <span className="name text-[#60a5fa] block">Jackson Zhao</span>
              </h1>
              <h3 className="mt-2">
                <span
                  ref={textRef}
                  className={`${styles.heroSubText} blue-text-gradient`}
                />
              </h3>
              <SocialLinks />
            </div>
          </div>

          {/* 3-D model — controlled height, below social links, no scroll interference */}
          <div className="hero-mobile-canvas-wrap">
            <ComputersCanvas />
          </div>
        </div>
      ) : (
        /* ════════════════════════════════════════════════
           DESKTOP LAYOUT
           Absolute-positioned text, full-section canvas
           ════════════════════════════════════════════════ */
        <>
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
                Hi <WavingHand />, I'm{" "}
                <span className="name text-[#60a5fa] block">Jackson Zhao</span>
              </h1>
              <h3 className="mt-2">
                <span
                  ref={textRef}
                  className={`${styles.heroSubText} blue-text-gradient`}
                />
              </h3>
              <SocialLinks />
            </div>
          </div>

          {/* Full-section background canvas */}
          <ComputersCanvas />
        </>
      )}
    </section>
  );
};

export default Hero;
