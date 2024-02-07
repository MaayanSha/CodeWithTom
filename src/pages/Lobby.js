import React from 'react';
import {ui} from "../components/UI/lobbyUI";
import {LobbyTitleSelection} from "../components/lobby/LobbyTitleSelection";

export default function Lobby() {
    // The Lobby component is the first page the user sees when they visit the site, contains the selection
    return (
        <div className={ui.lobby_body}>
            <div className={ui.lobby_title}>Choose a code block:</div>
                <LobbyTitleSelection />
        </div>
    );
}
