import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <TiHome />
      </a>
      <a
        href="#about"
        className={activeNav === "about" ? "active" : ""}
        onClick={() => setActiveNav("about")}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => setActiveNav("experience")}
      >
        <FaBook />
      </a>
      <a
        href="#services"
        className={activeNav === "services" ? "active" : ""}
        onClick={() => setActiveNav("services")}
      >
        <FaHandshake />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "portfolio" ? "active" : ""}
        onClick={() => setActiveNav("portfolio")}
      >
        <BsFillBriefcaseFill />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => setActiveNav("contact")}
      >
        <SiGooglemessages />
      </a>
    </nav>
  );
};

export default Nav;
