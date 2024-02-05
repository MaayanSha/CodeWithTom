import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    codeBlocks:[
        {
        title: "",
        code: "",
    },
    ]
}

// Create a slice for the code content
// reducer modifies the state by finding the relevant block and adding new code content as received from the socket
const codeContentSlice = createSlice({
    name: "codeContent",
    initialState,
    reducers: {
        updateCodeContent: (state, action) => {
            state.codeBlocks.find(block =>
                block.title === action.payload?.title).code = action.payload?.code
        },
        initCodeBlocks: (state, action) => {
            state.codeBlocks = action.payload
        }
    },
});

export const codeContentReducer = codeContentSlice.reducer;
export const {updateCodeContent, initCodeBlocks} = codeContentSlice.actions;