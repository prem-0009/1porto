import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  

  onscroll = () => {
    setIsScrolling(true);

    if (window.pageYOffset > 225) {
      setIsScrolling(false);
    }
  };

  const Preface = () => {
    return (
      <div className="article">
        <div className="background-image">
          <text>Hello there<br/><br/>fellow earthers
          </text>
        </div>
        {isScrolling ? <div className="scroll-down">scroll down</div> : ""}
      </div>
    );
  };
  return <Preface />;
};

export default Header;
