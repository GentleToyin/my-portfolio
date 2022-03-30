import React from "react";
import CallToAction from "./CallToAction";
import HeadersSocials from "./HeadersSocials";
// import hero from "../../assets/img1.JPG";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Toyin Olanipekun</h1>
        <h5 className="text-light">Fronted Developer</h5>
        <CallToAction />
        <HeadersSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        {/* <div className="hero">
          <img src={hero} alt="hero" id="hero-image" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
