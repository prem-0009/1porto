import React, { useState } from "react";
import "./header.css";


const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  // const img = 'https://giphy.com/embed/26BROrSHlmyzzHf3i';

  onscroll = () => {
    setIsScrolling(true);

    if (window.pageYOffset > 225) {
      setIsScrolling(false);
    }
  };

  const Preface = () => {
    return (
      <div className="article">
        <div
          // style={{ backgroundImage: `url(${img})` }}
          className="background-image"
        >
        {/* <iframe src="https://giphy.com/embed/26BROrSHlmyzzHf3i" width="480" height="480" ></iframe> */}
          <span>Hello there..</span>
        </div>
        {isScrolling ? <div className="scroll-down">scroll down</div> : ""}
      </div>
    );
  };
  return <Preface />;
};

export default Header;
