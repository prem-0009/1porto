import React, { useState, useEffect } from "react";
import "./home.css";
import { Container } from "@mui/material";
import project1 from "../../images/project1.png";

const Home = () => {
  const today = new Date();
  const hours = today.getHours();

  const [timeNow, setTimeNow] = useState();

  const greeting = () => {
    if (hours >= 12 && hours < 17) {
      setTimeNow("afternoon");
    }
    if (hours >= 17 && hours < 20) {
      setTimeNow("evening");
    }
    if (hours >= 20 || hours < 6) {
      setTimeNow("night");
    }
    if (hours >= 6 && hours < 12) {
      setTimeNow("morning");
    }
  };

  const Works = () => {
    return (
      <div className='work-main'>
        <div className="work">
          {/* change the github link to actual movie site */}
          <a
            className="link-project"
            href="https://github.com/prem-0009/Pmovies"
          >
            <span>search movies</span>
          </a>
        </div>
        <a className="link-github" href="https://github.com/prem-0009/Pmovies">
          Github
        </a>
      </div>
    );
  };

  useEffect(() => {
    greeting();
  }, [hours]);

  return (
    <div className="home-body">
      {/* <h1 className="header"></h1> */}
      <Container>
        <h2 className="home-header">Good {timeNow}</h2>
        <h3 className="work-title">My Project</h3>
        <Works />
        {/* <a className="link-github" href="https://github.com/prem-0009/Pmovies">
          Github
        </a> */}
      </Container>
    </div>
  );
};

export default Home;
