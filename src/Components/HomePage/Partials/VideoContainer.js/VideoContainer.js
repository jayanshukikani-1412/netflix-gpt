import React from "react";
import VideoBg from "./VideoBg";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const VideoContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovieList);
  if (!movies) return;

  const number = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[number];
  const { id, title, overview } = mainMovie;

  return (
    <div className="relative w-screen h-screen">
      <VideoBg id={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default VideoContainer;
