import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const HeadersSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target={"_blank"} rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target={"_blank"} rel="noreferrer">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default HeadersSocials;
