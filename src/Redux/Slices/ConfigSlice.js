import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"config",
    initialState:{
        lang:"english",
    },
    reducers:{
        SET_LANGUAGES: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const {SET_LANGUAGES} = ConfigSlice.actions;
export default ConfigSlice.reducer;