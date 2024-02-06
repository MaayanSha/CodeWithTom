import {FaArrowsUpToLine, FaClockRotateLeft, FaCodeBranch} from "react-icons/fa6";
import React from "react";
import {FaGift, FaTruck} from "react-icons/fa";
import {HiOutlineStatusOnline} from "react-icons/hi";

const classNameIcons = "absolute bottom-10 left-20 top-26 size-10 group-hover:animate-bounce transition-duration-600 ease-in-out";
const classNameUser = "rounded-full bg-green-400 h-2 w-2 left-2 mt-1.5 animate-ping transition-duration-1000 ease-in-out";
export const icons = {
    "Asynchronous Code": <FaCodeBranch className={classNameIcons}/>,
    "Synchronous": <FaArrowsUpToLine className={classNameIcons}/>,
    "Promise": <FaGift className={classNameIcons}/>,
    "Callback": <FaTruck className={classNameIcons}/>,
    "Async/Await": <FaClockRotateLeft className={classNameIcons}/>,
    "onlineUser": <span className={classNameUser}></span>,
}