import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerData: null,
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    ADD_POPULAR_MOVIES: (state, action) => {
      state.popularMovies = action.payload;
    },
    ADD_TOPRATED_MOVIES: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    ADD_UPCOMING_MOVIES: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    SET_TRAILER_DATA: (state, action) => {
      state.trailerData = action.payload;
    },
  }
});

export const {ADD_NOW_PLAYING_MOVIES, ADD_POPULAR_MOVIES, ADD_TOPRATED_MOVIES, ADD_UPCOMING_MOVIES, SET_TRAILER_DATA} = MovieSlice.actions;
export default MovieSlice.reducer;