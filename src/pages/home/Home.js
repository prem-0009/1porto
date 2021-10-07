import React, { useState, useEffect } from "react";
import "./home.css";
import { Container } from "@mui/material";
import project1 from "../../images/project1.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


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
      <div className="work-main">
        <div className="work">
          {/* change the github link to actual movie site */}
          <a
            className="link-project"
            href="https://github.com/prem-0009/Pmovies"
          >
            <span>search movies</span>
          </a>
        </div>
        <a
          className="link-github"
          href="https://github.com/prem-0009/Pmovies"
          target="_blank"
        >
          Github
        </a>
      </div>
    );
  };

  //   const [flipContact, setFlipContact] = useState("email");
  const [copyText, setCopyText] = useState("email");
  const [copySuccess, setCopySuccess] = useState("");

  const handleFlip = (e) => {
    setCopyText("prem.sherpa890@gmail.com");

    setTimeout(() => {
      setCopyText("email");
    }, 6000);
  };

  const handleIconClick = (e) => {
    setCopyText("prem.sherpa890@gmail.com");

    document.execCommand(copyText);
    navigator.clipboard.writeText(copyText);
    setCopySuccess("copied");
    setTimeout(() => {
        setCopySuccess('')
    }, 500);
  };


  useEffect(() => {
    greeting();
  }, [hours]);

  return (
    <div className="home-body">
      <Container>
        <h2 className="home-header">Good {timeNow}</h2>
        <h3 className="work-title">My Project</h3>
        <Works />
        {/* <a className="link-github" href="https://github.com/prem-0009/Pmovies">
          Github
        </a> */}
        {/* <span className='home-footer'>contact</span> */}
        {/* <Contact /> */}
        <div
          className="home-footer"
          onClick={(e) => handleFlip(e)}
          //   value={copyText}
        >
          {copyText === "email" ? (
            copyText
          ) : (
            <div className="email-footer">
              <span>{copyText}</span>&nbsp;&nbsp;
              <Badge badgeContent={copySuccess} 
              sx={{padding:'1px' }}
            //   color=''
              >
                <ContentCopyIcon
                  fontSize="small"
                  onClick={(e) => handleIconClick(e)}
                  />
                  </Badge>
            </div>
          )}
          {/* {copySuccess} */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
