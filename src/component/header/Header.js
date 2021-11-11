import React from "react";

import "./header.css";

const Header = () => {
  const Preface = () => {
    return (
      <article>
        Hello there.. it has been quite a journey,.. learning web development..it
        has been quite a astounding career change..and I believe it will be a long ride..
      </article>
    );
  };
  return (
    <div className="home-body">
      <h2 className="home-header">
        <Preface />
      </h2>
      <h3 className="work-title">My Projects</h3>
    </div>
  );
};

export default Header;
