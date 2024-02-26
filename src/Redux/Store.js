import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import movieReducer from "./Slices/MovieSlice";
import gptReducer from "./Slices/GPTSlice";
import configReducer from "./Slices/ConfigSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        config: configReducer,
    }
})

export default store;