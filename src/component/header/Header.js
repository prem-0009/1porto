import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  let today = new Date();
  let hours = today.getHours();

  const [timeNow, setTimeNow] = useState("");

  const greeting = () => {
    return hours >= 12 && hours < 17
      ? setTimeNow("afternoon")
      : hours >= 17 && hours < 20
      ? setTimeNow("evening")
      : hours >= 20 && hours < 6
      ? setTimeNow("night")
      : hours >= 6 && hours < 12
      ? setTimeNow("morning")
      : "";
  };

  useEffect(() => {
    greeting();
  });

  return (
    <div className="home-body">
      <h2 className="home-header">Good {timeNow}</h2>
      <h3 className="work-title">My Project</h3>
    </div>
  );
};

export default Header;
