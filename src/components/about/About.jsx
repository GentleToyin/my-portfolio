import React from "react";
import { RiAwardFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { ImFolderOpen } from "react-icons/im";
import GEEK from "../../assets/mr-geek.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={GEEK} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2</small>
            </article>
            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            I am a creative Web Developer offering years of experience providing
            high-impact web solutions for diverse industry organizations.
            Skilled in designing, developing and testing multiple web-based
            applications incorporating a range of technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
