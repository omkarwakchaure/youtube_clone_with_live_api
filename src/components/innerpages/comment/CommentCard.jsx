import React from "react";

const CommentCard = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
