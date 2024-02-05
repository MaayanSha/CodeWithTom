import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "highlight.js/styles/base16/espresso.css";
import Editor from '@monaco-editor/react';
import {updateCodeContent} from "../../store/codeContentSlice";
import {socket} from "../../socket";

export default function CodeSandbox({title}) {
    const dispatch = useDispatch();
    const [code, setCode] = React.useState("");
    const [hasChanged, setHasChanged] = React.useState(false);
    //fetch code block data from state by title
    const codeBlock = useSelector(state => state.codeContent.codeBlocks?.find(block =>
        block.title === title));
    function handleEditorChange(value, event){
        //update code block in state
        setCode(value);
        setHasChanged(true);
    }

    //emit code change to server every 2 seconds
    setTimeout(() => {
        if (hasChanged){
            socket.emit('send-code-change', codeBlock)
            dispatch(updateCodeContent({title: title, code: code}))
            setHasChanged(false)
        }
    }, 3000)

    //save code block to db every 5 minutes
    // setTimeout(() => {
    //     socket.emit('save-code-block', codeBlock)
    // }, 300000)

    return (
        <Editor
            height="90vh"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={codeBlock?.code}
            onChange={handleEditorChange}
            options={
            {
                fontSize: 14,
                minimap: {enabled: false},
                wordWrap: "on",

            }
            }
        />
    );
}