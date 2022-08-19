import React, { useState, useRef } from "react";
import "./Main.scss";

function Feed() {
  // 기존 댓글 input state
  const [commentArray, setCommentArray] = useState([
    {
      id: 0,
      content: "user1의 댓글1",
    },
  ]);

  // 동적 댓글 input state
  const [commentInput, setCommentInput] = useState("");

  // 동적 댓글 게시 버튼 활성화 비활성화 state
  const [isDisabled, setDisabled] = useState(true);

  // 댓글 게시 버튼 색상 state
  const [color, setColor] = useState("rgb(133, 182, 231)");

  // 고유 id 값 state
  const [id, setId] = useState(1);

  // 참조 걸기?
  const value = useRef();

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  // comment 유효성 검사
  const pushValue = () => {
    switch (!commentInput) {
      case false: // commentInput 에 값이 있는 경우 loginButton 활성화
        setDisabled(false);
        setColor("rgb(29, 142, 255)");
        break;
      default: // commentInput 에 값이 없는 경우 loginButton 비활성화
        setDisabled(true);
        setColor("rgb(133, 182, 231)");
        break;
    }
  };

  //comment 동적 추가
  const addCommnet = () => {
    setId(id + 1);
    const newCommnetInput = {
      id: id,
      content: value.current.value,
    };
    setCommentArray([...commentArray, newCommnetInput]);
    setCommentInput("");
  };

  const enterDown = (e) => {
    if (e.key === "Enter") {
      addCommnet();
    }
  };

  return (
    <React.Fragment>
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
          <div className="feed-comment-list padding-10px">
            {commentArray.map((comment) => {
              return <li key={comment.id}>{comment.content}</li>;
            })}
          </div>
          <div className="feed-comment-time padding-10px">9시간 전</div>
          <div className="feed-comment-write padding-10px">
            <input
              className="comment-write-input"
              placeholder="user1(으)로 댓글 달기..."
              ref={value}
              onChange={handleCommentInput}
              onKeyUp={pushValue}
              onKeyPress={enterDown}
              value={commentInput}
            />
            <button
              className="comment-write-button"
              disabled={isDisabled}
              style={{ color: color }}
              onClick={addCommnet}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Feed;
