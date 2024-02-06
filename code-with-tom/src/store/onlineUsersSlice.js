import {createSlice} from "@reduxjs/toolkit";
import {socket} from "../socket";

const initialState = {
    users:[],
    mentorSocketId:null,
    nicknames: [],
}

// Create a slice for the currently online users
// reducer modifies the state by adding new users represented by their socket IDs
// The mentorSocketId is used to identify the mentor user
//nicknames are optional
const onlineUsersSlice = createSlice({
    name: "onlineUsers",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload
        },
        addMentorUser: (state, action) => {
            state.mentorSocketId = action.payload
            state.users.push(action.payload)
        },
        addNicknames: (state, action) => {
            state.nicknames = action.payload
        }
    },
});
export const onlineUsersReducer = onlineUsersSlice.reducer;
export const {addUsers, addMentorUser, addNicknames} = onlineUsersSlice.actions;