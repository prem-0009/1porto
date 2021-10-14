import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="work-main">
      <div className="work">
          <a className="link-project"  href="https://movies1-ps.netlify.app/" target='_blank'>
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

export default Projects;
