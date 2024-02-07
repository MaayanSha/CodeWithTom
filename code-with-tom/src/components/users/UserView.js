import {useSelector} from "react-redux";
import {socket} from "../../socket";
import {codeui} from "../UI/codeblockUI";
import {icons} from "../UI/icons";
import React from "react";

export const UserView = ({title}) => {
    // Get the online users in the current room from the store
    const onlineUsers = useSelector(state => state.onlineUsers.rooms.find(room => room.room === title)?.users);
    // Filter out duplicate users
    const filteredUsers = [...new Set(onlineUsers)]
    const nicknames = useSelector(state => state.onlineUsers.nicknames);
    // Display the online users
    return(
        <>
            <h4 className={codeui.h4}>Online Users</h4>
            {filteredUsers?.map((user, index) => {
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