import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    mentorSocketId:null,
    nicknames: [],
    rooms:[]
}

// Create a slice for the currently online users
// reducer modifies the state by adding new users represented by their socket IDs
// The mentorSocketId is used to identify the mentor user
//nicknames are optional
const onlineUsersSlice = createSlice({
    name: "onlineUsers",
    initialState,
    reducers: {
        //users is an array of socketIds, no specified room
        addUsers: (state, action) => {
            state.users = action.payload
        },
        //mentorSocketId is used to identify the mentor user
        addMentorUser: (state, action) => {
            state.mentorSocketId = action.payload
            state.users.push(action.payload)
        },
        //nicknames are optional, push to array an object of {socketId, nickname}
        addNicknames: (state, action) => {
            state.nicknames.push(action.payload)
        },
        addRoom: (state, action) => {
            //check if room does not exist
            if(!state.rooms.find(room => room.room === action.payload.room)){
                state.rooms.push(action.payload)
            }
            //find the object of the room to update
            const roomIndex = state.rooms.findIndex(room => room.room === action.payload.room)
            //update the users in the object
            state.rooms[roomIndex].users = action.payload.users
        }
    },
});
export const onlineUsersReducer = onlineUsersSlice.reducer;
export const {addUsers, addMentorUser, addNicknames, addRoom} = onlineUsersSlice.actions;