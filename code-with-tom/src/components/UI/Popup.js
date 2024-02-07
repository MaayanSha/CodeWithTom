import React, {useEffect, useRef, useState} from "react";
import {Modal, ModalBody} from "reactstrap";
import {useDispatch} from "react-redux";
import {socket} from "../../socket";
import {addNicknames} from "../../store/onlineUsersSlice";
export const Popup = () => {
    const inputRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
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
        <div>
        <Modal isOpen={isOpen} onClosed={submitNickname}>
            <ModalBody>
                <div>
                    <h1>Welcome! you are now online. Would you like to enter a nickname? </h1>
                    <p><input placeholder="try 'Velvet Thunder'" ref={inputRef} className="text-black" onKeyDown={closeModal}/></p>
                </div>
            </ModalBody>
        </Modal>
        </div>
    )

}