import Comment from "./Comment";

function CommentList(props) {
  const { commentObj } = props;

  return commentObj.map((comment) => {
    return (
      <li className="feed-comment-list" key={comment.id}>
        <Comment
          id={comment.id}
          content={comment.content}
          writer={"익명"}
          createdAt={comment.createdAt || "2022-01-01"}
        />
      </li>
    );
  });
}

export default CommentList;
