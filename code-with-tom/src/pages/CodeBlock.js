import React from "react";
import {useSelector} from "react-redux";
import {socket} from "../socket";
import CodeSandbox from "../components/code/CodeSandbox";

export default function CodeBlock({match}) {

    //get code block id from url to pass it to the CodeSandbox component
    const {title} = match.params;

    //check if user is mentor to determine state
    //return read-only code block if user is the mentor
    const mentorSocketId = useSelector(state => state.onlineUsers.mentorSocketId);
    const isMentor = socket.id === mentorSocketId;

    return(
        <div className="container mx-auto px-36 pt-20 h-screen bg-slate-50">
            <div className="text-start text-2xl font-bold h-20">
                Code Block {title}
            </div>
            <div className="flex columns-2 gap-3 h-5/6">
                <div className="flex-grow flex border-2">
                    <CodeSandbox title={title}/>
                </div>
                <div className="flex-none w-1/3 border-2">
                    Online Users
                </div>
                {isMentor? <div className="flex-none w-1/3 border-2">mentor controls</div>: null}
            </div>
        </div>
    );
}