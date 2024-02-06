import {createSlice} from "@reduxjs/toolkit";
import {socket} from "../socket";

const initialState = {
    users:[],
    mentorSocketId:null,
}

// Create a slice for the currently online users
// reducer modifies the state by adding new users represented by their socket IDs
// The mentorSocketId is set to the first user that joins the lobby
const onlineUsersSlice = createSlice({
    name: "onlineUsers",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload
        },
        addMentorUser: (state, action) => {
            state.mentorSocketId = action.payload
        }
    },
});
export const onlineUsersReducer = onlineUsersSlice.reducer;
export const {addUsers, addMentorUser} = onlineUsersSlice.actions;