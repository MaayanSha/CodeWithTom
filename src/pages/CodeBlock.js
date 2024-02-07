import React, {useLayoutEffect} from "react";
import {useSelector} from "react-redux";
import {socket} from "../socket";
import CodeSandbox from "../components/code/CodeSandbox";
import ReadOnlyCodeView from "../components/code/ReadOnlyCodeView";
import {useParams} from "react-router-dom";
import {codeui} from "../components/UI/codeblockUI";
import {UserView} from "../components/users/UserView";

export default function CodeBlock() {
    //get code block id from url to pass it to the CodeSandbox component
    const {title} = useParams();
    //check if the current user is the mentor by comparing the socket id with the mentor's socket id
    //mentor of the room is retrieved by finding the first user in the room's user list
    //return read-only code block if user is the mentor
    const mentorSocketId = useSelector(state => state.onlineUsers.rooms?.find(obj => obj.room === title)?.users[0]);
    const isMentor = socket.id === mentorSocketId;

    //before the DOM is rendered, emit the 'join-room' event to join the room
    // so that the user can receive the code content
    useLayoutEffect(() => {
        socket.emit('join-room', title)
    },[title])

    //render the code block and the user view.
    // if the user is the mentor, render the read-only code view.
    // if user is student, render the code sandbox
    return(
        <div className={codeui.container}>
            <div className={codeui.title}>
                Code Block: {title}
            </div>
            <div className={codeui.flex}>
                <div className={codeui.codebox}>
                    {isMentor? <ReadOnlyCodeView title={title}/> : <CodeSandbox title={title}/>}
                </div>
                <div className={codeui.userbox}>
                    <UserView title={title}/>
                </div>
            </div>
        </div>
    );
}