import { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [copyText] = useState("prem.sherpa890@gmail.com");

  return (
    <>
      <footer className="home-footer">
        <div className="contact-footer">Contact me</div>
        <div className="email-div">
          <a href="mailto: prem.sherpa890@gmail.com" className="email-a">
            {copyText}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
