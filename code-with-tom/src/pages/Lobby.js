import React from 'react';
import {ui} from "../components/UI/lobbyUI";
import {LobbyTitleSelection} from "../components/lobby/LobbyTitleSelection";
import {socket} from "../socket";
import {SocketDisconnected} from "./SocketDisconnected";

export default function Lobby() {
    const connected = socket.connected

    if (!connected) {
        return (
            <div className={ui.lobby_body}>
                <SocketDisconnected />
            </div>
        )
    }
    return (
        <div className={ui.lobby_body}>
            <div className={ui.lobby_title}>Choose a code block:</div>
                <LobbyTitleSelection />
        </div>
    );
}
