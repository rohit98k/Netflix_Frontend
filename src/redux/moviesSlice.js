import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    toggle: false,
    trailerMovie: null,
    detail: {
      title: null,
      description: null,
    },
  },
  reducers: {
    //actions
    getnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    gettopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    getToggle: (state, action) => {
      state.toggle = !state.toggle;
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    getdetail: (state, action) => {
      state.detail.title = action.payload.title;
      state.detail.description = action.payload.description;
    },
  },
});

export const {
  getnowPlayingMovies,
  gettopRatedMovies,
  getpopularMovies,
  getupcomingMovies,
  getToggle,
  getTrailerMovie,
  getdetail,
} = moviesSlice.actions;

export default moviesSlice.reducer;
