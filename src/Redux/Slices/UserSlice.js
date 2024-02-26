import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        ADD_USER: (state, action) =>{
            return state = action.payload;
        },
        REMOVE_USER: () => {
            return null;
        }
    }
});

export const {ADD_USER, REMOVE_USER} = UserSlice.actions;

export default UserSlice.reducer