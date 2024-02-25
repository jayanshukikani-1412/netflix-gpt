import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import VideoContainer from "./Partials/VideoContainer.js/VideoContainer";
import MovieListContainer from "./Partials/MovieListContainer/MovieListContainer";
import usePopularMovies from "../../Hooks/usePopularMovies";
import useTopRatedMovies from "../../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../../Hooks/useUpcomingMovies";

const HomePage = () => {
  // custom hook for fetching noe playing movies data from TMDB API
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div className="bg-black text-white w-screen h-screen">
      <Header />
      <VideoContainer/>
      <MovieListContainer/>
    </div>
  );
};

export default HomePage;
