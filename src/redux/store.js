import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    app: userSlice,
    movie: moviesSlice,
  },
});

export default store;
