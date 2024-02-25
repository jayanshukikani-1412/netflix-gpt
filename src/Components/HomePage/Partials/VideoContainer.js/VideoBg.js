import React from "react";
import useGetMovieTrailer from "../../../../Hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBg = ({ id }) => {
  const trailerData = useSelector((store) => store?.movie?.trailerData);

  useGetMovieTrailer(id);

  if (!trailerData) return;
  return (
    <div className="absolute top-0 left-0 w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerData?.key}?&mute=1&autoplay=1&controls=0&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"        
      ></iframe>
    </div>
  );
};

export default VideoBg;
