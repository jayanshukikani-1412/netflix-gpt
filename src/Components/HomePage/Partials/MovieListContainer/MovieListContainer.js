import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movie);
  const NowPlayingMovieList = movies?.nowPlayingMovieList;
  const PopularMovies = movies?.popularMovies;
  const TopRatedMovies = movies?.topRatedMovies;
  const UpcomingMovies = movies?.upcomingMovies;
  return (
    <div className="w-screen h-screen bg-black ">
      <div className="relative z-20 flex flex-col gap-4 -mt-28">
        <MovieList title={"Now Playing Movies"} movies={NowPlayingMovieList} />
        <MovieList title={"Popular Movies"} movies={PopularMovies} />
        <MovieList title={"Top Rated Movies"} movies={TopRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={UpcomingMovies} />
      </div>
    </div>
  );
};

export default MovieListContainer;
