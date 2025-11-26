import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard key={comment.id} data={comment} />
          <div className="pl-5 ml-5">
            <CommentList key={comment.id} comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
