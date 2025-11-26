import React from "react";
import { Link } from "react-router";

const SearchVideoCard = ({ video }) => {
  const { snippet, id } = video;
  return (
    <Link
      to={"/watch?v=" + id}
      className="flex mb-6 w-2/3 hover:bg-gray-50 rounded-lg p-2 transition duration-200 ease-in-out overflow-hidden ml-52"
    >
      {/* Thumbnail */}
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        className="w-100 h-56 object-cover rounded-lg flex-shrink-0"
      />

      {/* Video Info */}
      <div className="ml-4 flex flex-col justify-between w-full">
        {/* Title */}
        <h3 className="text-sm font-semibold line-clamp-2">{snippet.title}</h3>

        {/* Channel Name */}
        <p className="text-xs text-gray-600 mt-1">{snippet.channelTitle}</p>

        {/* Publish Date */}
        <p className="text-xs text-gray-400 mt-1">
          {new Date(snippet.publishTime).toLocaleDateString()}
        </p>

        {/* Description */}
        {snippet.description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {snippet.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default SearchVideoCard;
