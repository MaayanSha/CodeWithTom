import React from "react";
import {useSelector} from "react-redux";
import {getInitialCodeByTitle, socket} from "../socket";
import CodeSandbox from "../components/code/CodeSandbox";
import {StoreStream} from "../data/StoreStream";
import ReadOnlyCodeView from "../components/code/ReadOnlyCodeView";
import {useParams} from "react-router-dom";
import {icons} from "../components/UI/icons";
import {codeui} from "../components/UI/codeblockUI";

export default function CodeBlock() {
    //call the StoreStream component to listen for socket events
    //StoreStream();
    //call the socket to get the current code block
    //getInitialCodeByTitle(match.params.title)
    //get code block id from url to pass it to the CodeSandbox component
    const {title} = useParams();

    //check if user is mentor to determine state
    //return read-only code block if user is the mentor
    const mentorSocketId = useSelector(state => state.onlineUsers.mentorSocketId);
    const isMentor = socket.id === mentorSocketId;

    const onlineUsers = useSelector(state => state.onlineUsers.users);
    //const filteredUsers = [...new Set(onlineUsers)]
    const filteredUsers = ["user1", "user2", "user3"]
    // setInterval(() => {
    //     socket.emit('get-users')
    // }, 5000)

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
                    <h4 className={codeui.h4}>Online Users</h4>
                    {filteredUsers?.map((user, index) => {
                        return (
                            <div className={codeui.onlineUsers}>
                                {icons.onlineUser}  {user === mentorSocketId? "Mentor" : "Anonymous User"}
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}