import { useState, useRef } from "react";

import "./footer.css";

const Footer = () => {
  const [copyText] = useState("prem.sherpa890@gmail.com");

  let outSideRef = useRef(false);

  return (
    <>
      <footer className="home-footer">
        <span className="text-contact ">Contact me</span>{' '}{' '}{'   '}
        <a
          href="mailto: prem.sherpa890@gmail.com"
          className="text-email email-footer"
        >
          {copyText}
        </a>
      </footer>
    </>
  );
};

export default Footer;
