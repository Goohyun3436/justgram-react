import React from "react";
import "./Main.css";

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
          {/* feed 1 */}
          <div className="to-do feed-container">
            <div className="to-do feed-header vertical-center padding-10px">
              <div>
                <img alt="프로필 이미지" /> 아이디
              </div>
              <div>...</div>
            </div>
            <div className="to-do feed-image-wrapper"></div>
            <div className="to-do feed-menu vertical-center spread-row padding-row-10px">
              <div>
                <img
                  className="feed-menu-like icon-image"
                  src="/images/heart.png"
                  alt="like-icon"
                />
              </div>
              <div>
                <img
                  className="icon-image"
                  src="/images/menu.png"
                  alt="menu-icon"
                />
              </div>
            </div>
            <div className="to-do feed-comment">
              <div className="feed-comment-like padding-10px">
                user1 님 외 10명이 좋아합니다
              </div>
              <div className="feed-comment-list padding-10px"></div>
              <div className="feed-comment-time padding-10px">9시간 전</div>
              <div className="feed-comment-write padding-10px">
                <input
                  className="comment-write-input"
                  placeholder="댓글 달기"
                />
                <button className="comment-write-button">게시</button>
              </div>
            </div>
          </div>

          {/* feed 2 */}
          <div className="to-do feed-container">
            <div className="to-do feed-header vertical-center padding-10px">
              <div>
                <img src="/images/home.png" alt="프로필 이미지" /> 아이디
              </div>
              <div>...</div>
            </div>
            <div className="to-do feed-image-wrapper"></div>
            <div className="to-do feed-menu vertical-center spread-row padding-row-10px">
              <div>
                <img
                  className="feed-menu-like icon-image"
                  src="/images/heart.png"
                  alt="like-icon"
                />
              </div>
              <div>
                <img
                  className="icon-image"
                  src="/images/menu.png"
                  alt="menu-icon"
                />
              </div>
            </div>
            <div className="to-do feed-comment">
              <div className="feed-comment-like padding-10px">
                user1 님 외 10명이 좋아합니다
              </div>
              <div className="feed-comment-list padding-10px"></div>
              <div className="feed-comment-time padding-10px">9시간 전</div>
              <div className="feed-comment-write padding-10px">
                <input
                  className="comment-write-input"
                  placeholder="댓글 달기"
                />
                <button className="comment-write-button">게시</button>
              </div>
            </div>
          </div>

          {/* feed 3 */}
          <div className="to-do feed-container">
            <div className="to-do feed-header vertical-center padding-10px">
              <div>
                <img alt="프로필 이미지" /> 아이디
              </div>
              <div>...</div>
            </div>
            <div className="to-do feed-image-wrapper"></div>
            <div className="to-do feed-menu vertical-center spread-row padding-row-10px">
              <div>
                <img
                  className="feed-menu-like icon-image"
                  src="/images/heart.png"
                  alt="like-icon"
                />
              </div>
              <div>
                <img
                  className="icon-image"
                  src="/images/menu.png"
                  alt="menu-icon"
                />
              </div>
            </div>
            <div className="to-do feed-comment">
              <div className="feed-comment-like padding-10px">
                user1 님 외 10명이 좋아합니다
              </div>
              <div className="feed-comment-list padding-10px"></div>
              <div className="feed-comment-time padding-10px">9시간 전</div>
              <div className="feed-comment-write padding-10px">
                <input
                  className="comment-write-input"
                  placeholder="댓글 달기"
                />
                <button className="comment-write-button">게시</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
