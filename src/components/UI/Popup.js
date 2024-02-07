import React, {useEffect, useRef, useState} from "react";
import {Modal, ModalBody} from "reactstrap";
import {socket} from "../../socket";
export const Popup = () => {
    const inputRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
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
            <ModalBody className="text-black text-lg my-2 font-bold">
                    <p>Yay! Another user is online too.</p>
                        <p>Enter a name/nickname, so they would know who you are. Hit 'Enter' to apply </p>
                    <p><input placeholder=" try 'Velvet Thunder'" ref={inputRef} className="text-black border-2 rounded-2xl h-10 mt-2" onKeyDown={closeModal}/></p>
                <button onClick={()=>setIsOpen(false)} className="bg-red-500 text-white text-xs rounded-xl h-8 w-24 opacity-60 hover:opacity-100 mt-4">No, Thanks</button>
            </ModalBody>
        </Modal>
    )

}