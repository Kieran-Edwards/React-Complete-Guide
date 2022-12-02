import React from "react";

const Modal = (props) => {
    console.log(props);
    const modalStateChange = (event) => {
        event.preventDefault();
        props.modalHandler();
    };
    return (
        <div>
            <div>{props.modalContent.title}</div>
            <div>{props.modalContent.content}</div>
            <button onClick={modalStateChange}>close</button>
        </div>
    );
};

export default Modal;
