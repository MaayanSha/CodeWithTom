import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "highlight.js/styles/base16/espresso.css";
import Editor from '@monaco-editor/react';
import {updateCodeContent} from "../../store/codeContentSlice";
import {socket} from "../../socket";
import {Toolbar} from "./Toolbar";

export default function CodeSandbox({title}) {
    const dispatch = useDispatch();
    //fetch code block data from state by title
    const codeBlock = useSelector(state => state.codeContent.codeBlocks?.find(block =>
        block.title === title));

    function handleEditorChange(value, event){
        const newCode = {title: title, code: value}
        //update code block in state
        dispatch(updateCodeContent(newCode))
        socket.emit('send-code-change', newCode)
    }

    //save code block to db every 5 minutes
    setTimeout(() => {
        socket.emit('save-code-block', codeBlock)
    }, 300000)

    function saveCodeToDb(){
        socket.emit('save-code-block', codeBlock)
    }

    return (
        <>
        <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={codeBlock? codeBlock?.code : "//Loading code..."}
            onChange={handleEditorChange}
            options={
            {
                fontSize: 14,
                minimap: {enabled: false},
                wordWrap: "on",
            }
            }
        />
            <Toolbar saveCodeToDb={saveCodeToDb}/>
        </>
    );
}