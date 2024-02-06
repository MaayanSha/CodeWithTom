import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {icons} from "../components/UI/icons";
import {ui} from "../components/UI/lobbyUI";

export default function Lobby() {

    //hold list of code blocks from current state
    //offer selection of code blocks to user
    //pass selected code block data to CodeBlock component


    const codeBlocks = useSelector(state => state.codeBlocks);
    const titles = ["Asynchronous Code", "Synchronous", "Promise", "Callback", "Async/Await"]
    return (
        <div className={ui.lobby_body}>
            <div className={ui.lobby_title}>Choose a code block:</div>
            <div className={ui.code_grid}>
                {titles.map((title, index) => {
                    return (
                        <div key={index} className={ui.codeblock}>
                            <a href={`/codeblock/${title}`} className={ui.link}>{title}</a>
                            {icons[title]}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
