import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {socket} from "../socket";
import CodeSandbox from "../components/code/CodeSandbox";
import ReadOnlyCodeView from "../components/code/ReadOnlyCodeView";
import {useParams} from "react-router-dom";
import {codeui} from "../components/UI/codeblockUI";
import {Popup} from "../components/UI/Popup";
import {UserView} from "../components/users/UserView";

export default function CodeBlock() {
    //get code block id from url to pass it to the CodeSandbox component
    const {title} = useParams();
    //check if the current user is the mentor
    //return read-only code block if user is the mentor
    const mentorSocketId = useSelector(state => state.onlineUsers.mentorSocketId);
    const isMentor = socket.id === mentorSocketId;

    useEffect(() => {
        socket.emit('join-room', title)
    },[])

    return(
        <div className={codeui.container}>
            <div className={codeui.title}>
                Code Block: {title}
            </div>
            <div className="fixed top-0 right-0 p-24">
                <Popup />
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