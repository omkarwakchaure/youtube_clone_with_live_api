import React from "react";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const commentsData = [
    {
      id: 1,
      name: "User 1",
      text: "Comment 1",
      replies: [
        {
          id: 2,
          name: "User 2",
          text: "Reply 1",
          replies: [
            {
              id: 3,
              name: "User 3",
              text: "Reply to Reply 1",
              replies: [
                {
                  id: 4,
                  name: "User 4",
                  text: "Deepest Level Reply",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: "User 5",
          text: "Another Reply to Comment 1",
          replies: [],
        },
      ],
    },
    {
      id: 6,
      name: "User 6",
      text: "Comment 2",
      replies: [
        {
          id: 7,
          name: "User 7",
          text: "Reply to Comment 2",
          replies: [
            {
              id: 8,
              name: "User 8",
              text: "Reply to Reply to Comment 2",
              replies: [],
            },
          ],
        },
        {
          id: 9,
          name: "User 9",
          text: "Another Reply to Comment 2",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
