import React from 'react';
import {ui} from "../components/UI/lobbyUI";
import {LobbyTitleSelection} from "../components/lobby/LobbyTitleSelection";

export default function Lobby() {
    return (
        <div className={ui.lobby_body}>
            <div className={ui.lobby_title}>Choose a code block:</div>
                <LobbyTitleSelection />
        </div>
    );
}
