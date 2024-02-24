import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black w-screen aspect-video">
      <div className="absolute top-1/2 -translate-y-1/2 left-20">
        <h1 className="text-6xl font-semibold">{title}</h1>
        <p className="w-1/3 my-2">{overview.length > 200 ? overview.slice(0, 200) + " ..." : overview}</p>
        <div className="flex items-center gap-4 mt-10">
          <button className="flex items-center bg-white text-black px-4 py-2 rounded-sm font-semibold cursor-pointer hover:opacity-60 duration-300">
            <FaPlay className="mr-1" />
            Play
          </button>
          <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-sm font-semibold cursor-pointer hover:opacity-80 duration-300">
            <MdInfoOutline className="mr-1 font-semibold" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
