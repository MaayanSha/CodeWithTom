import React, {useEffect, useRef, useState} from "react";
import {Modal, ModalBody} from "reactstrap";
import {socket} from "../../socket";
import {popupUI} from "../UI/popupUI";

//this is a popup modal that pops up when there is more than one user in the chat.
//it asks the user to enter a nickname, which will be broadcasted to all users currently in the room.
export const Popup = () => {
    const inputRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    //send nickname to server, server will broadcast to all users
    const submitNickname = () => {
        if(inputRef.current.value){
            socket.emit('add-nickname', {socket_id: socket.id, nickname:inputRef.current.value})
        }
        setIsOpen(false)
    }

    //close modal only when user presses enter
    const closeModal = (e) => {
        if(e.key === 'Enter'){
            setIsOpen(false)
        }
    }

    //open modal on page load
    useEffect(() => {
        setIsOpen(true)
    },[])

    //return modal setup
    return(
        <Modal isOpen={isOpen} onClosed={submitNickname}>
            <ModalBody className={popupUI.modalBody}>
                    <p>Yay! Another user is online too.</p>
                        <p>Enter a name/nickname, so they would know who you are. Hit 'Enter' to apply </p>
                    <p><input placeholder={popupUI.placeholder} ref={inputRef} className={popupUI.input} onKeyDown={closeModal}/></p>
                <button onClick={()=>setIsOpen(false)} className={popupUI.button}>No, Thanks</button>
            </ModalBody>
        </Modal>
    )

}