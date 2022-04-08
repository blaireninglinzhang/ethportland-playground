import React from "react";
import twitterLogo from "../assets/twitter-logo.svg";

const Footer = (props) => {
  return (
    <div className="footer-container-twitter">
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href="https://twitter.com/sunsetjupiter"
        target="_blank"
        rel="noreferrer"
      >
        Blaire
      </a>
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href="https://twitter.com/j7s7ph"
        target="_blank"
        rel="noreferrer"
      >
        Joseph
      </a>
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href="https://twitter.com/dex_chen_V"
        target="_blank"
        rel="noreferrer"
      >
        Dex
      </a>
    </div>
  );
};

export default Footer;
