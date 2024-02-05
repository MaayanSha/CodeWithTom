import {configureStore} from "@reduxjs/toolkit";
import {onlineUsersReducer} from "./onlineUsersSlice";
import {codeContentReducer} from "./codeContentSlice";

export const store = configureStore({
    reducer: {
        onlineUsers: onlineUsersReducer,
        codeContent: codeContentReducer,
    },
})

