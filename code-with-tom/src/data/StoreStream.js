import {useDispatch, useSelector} from "react-redux";
import {addCodeBlock, initCodeBlocks, updateCodeContent} from "../store/codeContentSlice";
import {addMentorUser, addUser, addUsers, checkStatus} from "../store/onlineUsersSlice";
import {socket} from "../socket";

export const StoreStream = () => {
    const dispatch = useDispatch();

    socket.on('connect', () => {
        console.log('connected')
    })

    socket.on('mentor-joined', (mentorSocketId) => {
        dispatch(addMentorUser(mentorSocketId))
    })
    // Listen for the 'connect' event, and add the user to the store
    socket.on('connect', () => {
        socket.emit('get-code-all');
        socket.emit('get-mentor')
        socket.emit('get-users')
    })

    socket.on('sent-users', (users) => {
        dispatch(addUsers(users))
    })

// Listen for the 'init-code' event
// dispatch the addCodeBlock action to add the code block to the store
    socket.on('init-all-code', (code) => {
        dispatch(initCodeBlocks(code))
    })

// Listen for the 'code-changed' event
// dispatch the updateCodeContent action to update the code content in the store
    socket.on('code-changed', (code) => {
       dispatch(updateCodeContent(code))
    })
}