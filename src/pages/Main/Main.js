import React from "react";
import "./Main.scss";
import Feed from "./Feed";

function Main() {
  return (
    <React.Fragment>
      <header className="to-do header-wrapper spread-row">
        <div className="vertical-center">
          <img
            className="icon-image"
            src="/images/Instagram.png"
            alt="instagram-logo"
          />
          <span className="header-text">| Justgram</span>
        </div>
        <div className="vertical-center">
          <input placeholder="검색" />
        </div>
        <div>
          <img className="icon-image" src="/images/home.png" alt="main-icon" />
          <img
            className="icon-image margin-left-10px"
            src="/images/dm.png"
            alt="dm-icon"
          />
          <img
            className="icon-image margin-left-10px"
            src="/images/plus.png"
            alt="add-icon"
          />
          <img
            className="icon-image margin-left-10px"
            src="/images/compass.png"
            alt="search-icon"
          />
          <img
            className="icon-image margin-left-10px"
            src="/images/heart.png"
            alt="like-icon"
          />
        </div>
      </header>
      <div className="flex-center">
        <div className="to-do contents-wrapper">
          <Feed />
          <Feed />
          <Feed />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
