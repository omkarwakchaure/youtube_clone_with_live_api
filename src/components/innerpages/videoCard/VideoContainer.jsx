import React, { useEffect, useState } from "react";

import { Link } from "react-router";

import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const res = await data.json();

    setVideos(res.items);
  };

  return (
    <div className="flex flex-wrap ml-12">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
