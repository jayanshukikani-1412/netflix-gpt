import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"GPT",
    initialState:{
        isGPT: false,
    },
    reducers:{
        TOGGLE_IS_GPT_VALUE: (state) => {
            state.isGPT = !state.isGPT
        },
    }
});

export const {TOGGLE_IS_GPT_VALUE} = GPTSlice.actions;
export default GPTSlice.reducer;