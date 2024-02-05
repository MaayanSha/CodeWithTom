import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getInitialCodeByTitle, socket} from "../socket";
import CodeSandbox from "../components/code/CodeSandbox";
import {StoreStream} from "../data/StoreStream";
import ReadOnlyCodeView from "../components/code/ReadOnlyCodeView";

export default function CodeBlock({match}) {
    //call the StoreStream component to listen for socket events
    StoreStream();
    //call the socket to get the current code block
    //getInitialCodeByTitle(match.params.title)
    //get code block id from url to pass it to the CodeSandbox component
    //const {title} = match.params || "first";

    //check if user is mentor to determine state
    //return read-only code block if user is the mentor
    const mentorSocketId = useSelector(state => state.onlineUsers.mentorSocketId);
    const isMentor = socket.id === mentorSocketId;

    const onlineUsers = useSelector(state => state.onlineUsers.users);
    const filteredUsers = [...new Set(onlineUsers)]

    return(
        <div className="container mx-auto px-36 pt-20 h-screen bg-slate-50">
            <div className="text-start text-2xl font-bold h-20">
                Code Block
            </div>
            <div className="flex columns-2 gap-3 h-5/6">
                <div className="flex-grow flex">
                    {isMentor? <ReadOnlyCodeView title={"Async/Await"}/> : <CodeSandbox title={"Async/Await"}/>}
                </div>
                <div className="flex-none w-1/3 border-2">
                    <h4>Online Users:</h4>
                    {filteredUsers?.map((user, index) => {
                        return (
                                <div> 🟢 {user}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}