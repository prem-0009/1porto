import React from "react";
import "./projects.css";

const Projects = () => {
  const Work = () => {
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
  
  return <Work />;
};

export default Projects;
