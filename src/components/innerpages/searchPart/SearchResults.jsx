import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { YOUTUBE_SEARCH_API } from "../../../utils/constants";
import SearchVideoCard from "./SearchVideoCard";

const SearchResults = () => {
  const [results, setResults] = useState([]);

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const res = await fetch(YOUTUBE_SEARCH_API(query));
      const data = await res.json();

      const videosWithId = data
        .filter((item) => item.id.kind === "youtube#video")
        .map((item) => ({
          ...item,
          id: item.id.videoId, // normalize id
        }));

      setResults(videosWithId);
    };
    fetchResults();
  }, [query]);
  return (
    <div className="flex flex-col mt-4 w-full">
      {results.map((video) => (
        <SearchVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default SearchResults;
