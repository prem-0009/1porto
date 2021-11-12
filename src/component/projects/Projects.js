import React from "react";
import "./projects.css";
import img from "../../vid/giphy1.gif";

const Projects = () => {
  const obj = [
    {
      name: "spell",
      video:
        "https://drive.google.com/file/d/1fBK0LMwg-sm8Saf2T2GnxOmDQFF0KpiB/preview",
      webLink: "https://kids-spell-f0f85.web.app/",
      gitLink: "https://github.com/prem-0009/Pspell",
    },
    {
      name: "movie",
      video:
        "https://drive.google.com/file/d/1w54KCk8eK-7LEbg-7v_x2xa_D1XjC1TT/preview",
      webLink: "https://movies1-ps.netlify.app/",
      gitLink: "https://github.com/prem-0009/Pmovies",
    },
  ];

  const Spell = () => {
    return (
      <>
        I made this website with my child in my mind. It lets me type a word and
        with:
        <ul>
          <li>
            <span>Play button</span>: The app will pronounce the word.
          </li>
          <li>
            <span>Correct button</span>: If the word is spelled correctly, it
            can be manually saved.
          </li>
          <li>
            <span>Incorrect button</span>: If the word is spelled incorrectly,
            it can be manually saved for future reference.
          </li>
          <li>
            <span>Correct and Incorrect tabs</span>: We can view saved words.
          </li>
          <li>
            <span>Tech used</span>: React, Material UI, Firebase, Google
            authentication.
          </li>
        </ul>
      </>
    );
  };

  const Movie = () => {
    return (
      <>
        It is a website to search for movies and tv-shows. It also filters list
        as per the selected button-genre.
        <ul>
          <li>
            <span>Tech used</span>: React, Material UI, CSS, Javascript, TMDB's
            API.
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div
        className='project-top-bar'
      ></div>
      <h3
        style={{
          backgroundImage: `url(${img})`,
          fontSize: "2rem",
          textAlign: "center",
        }}
        className="background-image"
      >
        My Projects
      </h3>
      <div className="projects">
        {obj.map((item, i) => {
          return (
            <div className="work-main" key={i}>
              <iframe src={item.video} title={item.name} />
              <article className="project-article">
                {item.name === "spell" ? (
                  <Spell />
                ) : item.name === "movie" ? (
                  <Movie />
                ) : (
                  ""
                )}
              </article>

              <div>
                <a className="link" href={item.webLink}>
                  Live site
                </a>{" "}
                <a className="link" href={item.gitLink}>
                  Github
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className='project-bottom-bar'
      ></div>
    </>
  );
};

export default Projects;
