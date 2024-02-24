import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import movieReducer from "./Slices/MovieSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    }
})

export default store;