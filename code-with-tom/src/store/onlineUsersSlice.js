import {createSlice} from "@reduxjs/toolkit";

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
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
            state.mentorSocketId = state.users[0]
        }
    },
});
export const onlineUsersReducer = onlineUsersSlice.reducer;
export const {addUser} = onlineUsersSlice.actions;