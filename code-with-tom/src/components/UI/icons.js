import {FaArrowsUpToLine, FaClockRotateLeft, FaCodeBranch} from "react-icons/fa6";
import React from "react";
import {FaGift, FaPlay, FaTruck} from "react-icons/fa";
import {HiOutlineStatusOnline} from "react-icons/hi";
import {TfiTimer} from "react-icons/tfi";
import {IoCloudUploadSharp, IoPlayOutline} from "react-icons/io5";
import {MdOutlineCloudUpload} from "react-icons/md";
import {BsClock, BsCloudArrowUp} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";

const classNameIcons = "absolute bottom-10 left-20 top-26 size-10 group-hover:animate-bounce transition-duration-600 ease-in-out";
const classNameUser = "rounded-full bg-green-400 h-2 w-2 left-2 mt-1.5 animate-ping transition-duration-1000 ease-in-out";
const classNameUtilityButtons = "size-8 mb-2 ml-2 mr-2 mt-1 hover:scale-125 transition-duration-400 ease-in-out"
export const icons = {
    "Async/Await": <FaClockRotateLeft className={classNameIcons}/>,
    "Array Manipulation": <FaArrowsUpToLine className={classNameIcons}/>,
    "Promise Chaining": <FaGift className={classNameIcons}/>,
    "Closure": <FaTruck className={classNameIcons}/>,
    "DOM Manipulation": <FaCodeBranch className={classNameIcons}/>,
    "onlineUser": <span className={classNameUser}></span>,
    "runCode":<IoPlayOutline className={classNameUtilityButtons}/>,
    "timer":<AiOutlineClockCircle className={classNameUtilityButtons}/>,
    "saveCode":<BsCloudArrowUp className={classNameUtilityButtons}/>,
}