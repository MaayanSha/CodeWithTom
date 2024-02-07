import {useDispatch} from "react-redux";
import {initCodeBlocks, updateCodeContent} from "../store/codeContentSlice";
import {addMentorUser, addNicknames, addRoom, addUsers} from "../store/onlineUsersSlice";
import {socket} from "../socket";

// This function listens for events from the server and updates the store
export const StoreStream = () => {
    const dispatch = useDispatch();

    // Listen for the 'connect' event, and add the user to the store
    socket.on('connect', () => {
        console.log('connected to socket')
        socket.emit('get-code-all');
        socket.emit('get-users')
    })

    // wait for the 'mentor-joined' event, and add the mentor to the store
    socket.on('mentor-joined', (mentorSocketId) => {
        dispatch(addMentorUser(mentorSocketId))
    })

    // listen for the online users to be sent from the server, and add them to the store
    socket.on('sent-users', (users) => {
        dispatch(addUsers(users))
    })

    socket.on('sent-nicknames', (nicknames) => {
        dispatch(addNicknames(nicknames))
    })

    socket.on('user-joined-room', ({users,room}) => {
        dispatch(addRoom({users,room}))
    })

    // Listen for the 'init-code' event
    // add the code blocks from the database to the store
    socket.on('init-all-code', (code) => {
        dispatch(initCodeBlocks(code))
        socket.emit('get-users')
    })

    // Listen for the 'code-changed' event
    // dispatch the updateCodeContent action to update the code content in the store
    socket.on('code-changed', (code) => {
       dispatch(updateCodeContent(code))
        socket.emit('get-users')
    })
}