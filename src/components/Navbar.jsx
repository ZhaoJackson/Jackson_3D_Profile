import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { logo } from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-bar ${styles.paddingX} ${scrolled ? "navbar-bar--scrolled" : ""}`}>

      {/* ── Logo + name (far left) ── */}
      <a
        href="#"
        className="navbar-brand"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={logo} alt="Jackson Zhao logo" className="logo navbar-logo" />
        <span className="navbar-name">Jackson Zhao</span>
      </a>

      {/* ── Resume button (far right) ── */}
      <a
        href="https://drive.google.com/file/d/1abB2fmg_TnhIkt8dnXhOPcdRZZ10H3wA/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="resume-link"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
