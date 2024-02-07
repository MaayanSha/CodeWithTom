import {useSelector} from "react-redux";
import {ui} from "../UI/lobbyUI";
import {icons} from "../UI/icons";
import React from "react";


export const LobbyTitleSelection = () => {
    //hold list of code blocks from current state
    //offer selection of code blocks to user
    //pass selected code block data to CodeBlock component
    const codeBlocks = useSelector(state => state.codeContent.codeBlocks);
    const titles = codeBlocks?.map(block => block.title);
    return (
        <div className={ui.code_grid}>
        {titles?.map((title, index) => {
            return (
                <div key={index} className={ui.codeblock}>
                    <a href={`/codeblock/${title}`} className={ui.link}>{title}</a>
                    {icons[title]}
                </div>
            )
        })}
        </div>
    )
}