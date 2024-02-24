import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import VideoContainer from "./Partials/VideoContainer.js/VideoContainer";

const HomePage = () => {
  // custom hook for fetching noe playing movies data from TMDB API
  useNowPlayingMovies();
  
  return (
    <div className="bg-black text-white w-screen h-screen">
      <Header />
      <VideoContainer/>
    </div>
  );
};

export default HomePage;
