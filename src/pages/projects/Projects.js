import React from "react";
import "./projects.css";
import project1 from "../../images/project1.png";

const Projects = () => {
  return (
    <div>
      <h1 className="header">Projects</h1>
      <div className="projects">
        <div className='project'>
          <a href="https://github.com/prem-0009/Pmovies">
            <img className="project-img" src={project1} alt="project 1" />
          </a>
          <a className='link-github' href='https://github.com/prem-0009/Pmovies'>Github Link</a>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
