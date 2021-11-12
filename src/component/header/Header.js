import React, { useState, useRef } from "react";
import "./header.css";
import img from "../../vid/giphy1.gif";

const Header = () => {
  const [word, setWord] = useState("astounding");
  const [isScrolling, setIsScrolling] = useState(false);

  let ref = null;

  onscroll = () => {
    setIsScrolling(true);

    console.log("scorollling");

    if (window.pageYOffset > 217) {
      setIsScrolling(false);
    }
    console.log(typeof(window.pageYOffset))

    // clearTimeout(ref);

    // ref = setTimeout(() => {
    //   setIsScrolling(false);
    // }, 200);
  };

  const Preface = () => {
    return (
      <div className="article">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="background-image"
          // style={{marginTop:'25vh', }}
        >
          <text>Hello there..</text>
        </div>
        {isScrolling ? (
          <div
            style={{
              marginBottom: "20vh",
              position: "fixed",
              bottom: "-18.5vh",
              color: "black",
              zIndex: "3",
            }}
          >
            scroll down
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
  return <Preface />;
};

export default Header;
