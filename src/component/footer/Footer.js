import { useState } from "react";
import "./footer.css";
import giphy from "../../vid/giphy1.gif";

const Footer = () => {
  const [copyText] = useState("prem.sherpa890@gmail.com");

  return (
    <>
      <footer className="home-footer">
        <div
          className="text-contact "
          style={{ backgroundImage: `url(${giphy})` }}
        >
          Contact me
        </div>
        <div className="email-div">
          <a href="mailto: prem.sherpa890@gmail.com" className="text-email">
            {copyText}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
