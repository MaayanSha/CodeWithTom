import React from 'react';
import {useSelector} from "react-redux";

export default function Lobby() {
    //hold list of code blocks from current state
    //offer selection of code blocks to user
    //pass selected code block data to CodeBlock component
    const codeBlocks = useSelector(state => state.codeBlocks);
    return (
        <div className="container mx-auto p-20 h-screen">
            <div className="text-start text-2xl font-bold h-20">Choose a block code:</div>
            <div className="grid grid-cols-3 gap-1 place-content-evenly h-4/5 place-items-center">
                <div className="size-40 border-double border-4">01</div>
                <div className="size-40 border-double border-4">02</div>
                <div className="size-40 border-double border-4">03</div>
                <div className="size-40 border-double border-4">04</div>
                <div className="size-40 border-double border-4">05</div>
            </div>
        </div>
    );
}
