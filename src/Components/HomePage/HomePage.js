import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import VideoContainer from "./Partials/VideoContainer.js/VideoContainer";
import MovieListContainer from "./Partials/MovieListContainer/MovieListContainer";
import usePopularMovies from "../../Hooks/usePopularMovies";
import useTopRatedMovies from "../../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../../Hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTContainer from "../GPT/GPTContainer";

const HomePage = () => {
  const isGPT = useSelector((store) => store?.gpt?.isGPT);
  // custom hook for fetching movies data from TMDB API
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black text-white w-screen h-screen">
      <Header />
      {isGPT ? (
        <GPTContainer />
      ) : (
        <>
          <VideoContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default HomePage;
