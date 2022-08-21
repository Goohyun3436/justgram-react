import React from "react";

function Comment(props) {
  const { content, writer, createdAt } = props;

  return (
    <span>
      <span className="comment-user-ID">{writer}</span>
      <span className="comment-write-input">{content}</span>
      <span className="comment-date">{createdAt}</span>
    </span>
  );
}

export default Comment;
