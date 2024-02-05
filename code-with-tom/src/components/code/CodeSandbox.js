import React from 'react';
import {useSelector} from "react-redux";

export default function CodeSandbox({title}) {

    //fetch code block data from state by title
    const codeBlock = useSelector(state => state.codeBlocks.find(block =>
        block.title === title));

    return (
        <div>
            CodeSandbox
        </div>
    );
}