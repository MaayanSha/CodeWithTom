import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    codeBlocks:[
        {
        codeTitle: "",
        codeContent: "",
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
                block.codeTitle === action.payload.title).codeContent = action.payload.code
        },
        addCodeBlock: (state, action) => {
            state.codeBlocks = [...state.codeBlocks, action.payload]
        }
    },
});

export const codeContentReducer = codeContentSlice.reducer;
export const {updateCodeContent, addCodeBlock} = codeContentSlice.actions;