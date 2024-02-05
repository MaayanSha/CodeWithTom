import { io } from 'socket.io-client';
import {addCodeBlock, updateCodeContent} from "./store/codeContentSlice";

const URL = process.env.REACT_APP_SERVER_URL;
export const socket = io(URL);

// Listen for the 'init-code' event
// dispatch the addCodeBlock action to add the code block to the store
socket.on('init-code', (code) => {
    addCodeBlock(code)
})

// Listen for the 'code-changed' event
// dispatch the updateCodeContent action to update the code content in the store
socket.on('code-changed', (code) => {
    updateCodeContent(code)
})