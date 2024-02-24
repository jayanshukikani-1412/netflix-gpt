import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: null,
    trailerData: null,
  },
  reducers: {
    ADD_NOW_PLAYING_MOVIES: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    SET_TRAILER_DATA: (state, action) => {
      state.trailerData = action.payload;
    },
  }
});

export const {ADD_NOW_PLAYING_MOVIES, SET_TRAILER_DATA} = MovieSlice.actions;
export default MovieSlice.reducer;