import {useSelector} from "react-redux";
import {codeui} from "../UI/codeblockUI";
import {icons} from "../UI/icons";
import React from "react";
import {Popup} from "../code/Popup";

export const UserView = ({title}) => {
    // Get the online users in the current room from the store
    const onlineUsers = useSelector(state => state.onlineUsers.rooms.find(room => room.room === title)?.users);
    // Filter out duplicate users
    const filteredUsers = [...new Set(onlineUsers)]
    const nicknames = useSelector(state => state.onlineUsers.nicknames);
    // Display the online users in the room
    // if there are two users or more in the room, display the popup component and suggest adding a nickname
    // nicknames of the users are displayed if they have been set, o.w display "Anonymous User"
    return(
        <>
            {filteredUsers.length > 1 ?
                <Popup />
                : null}
            <h4 className={codeui.h4}>Online Users</h4>
            {filteredUsers?.map((user) => {
                return (
                    <div className={codeui.onlineUsers}>
                        {icons.onlineUser}
                        {nicknames?.find(nickname => nickname.socket_id === user)?.nickname || "Anonymous User"}
                    </div>
                )
            })}
        </>
    )
}