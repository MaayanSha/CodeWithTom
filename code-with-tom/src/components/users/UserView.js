import {useSelector} from "react-redux";
import {socket} from "../../socket";
import {codeui} from "../UI/codeblockUI";
import {icons} from "../UI/icons";
import React from "react";

export const UserView = () => {

    // Get the online users from the store
    const onlineUsers = useSelector(state => state.onlineUsers.users);
    // Filter out duplicate users
    const filteredUsers = [...new Set(onlineUsers)]

    // Display the online users
    return(
        <>
            <h4 className={codeui.h4}>Online Users</h4>
            {filteredUsers?.map((user, index) => {
                return (
                    <div className={codeui.onlineUsers}>
                        {icons.onlineUser}
                        {user}
                    </div>
                )
            })}
        </>
    )
}