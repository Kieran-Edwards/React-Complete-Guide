import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import "./ErrorModal.css";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.errorHandler}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <Card>
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="classes.actions">
                    <Button onClick={props.errorHandler}>Okay!</Button>
                </footer>
            </Card>
        </div>
    );
};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop errorHandler={props.errorHandler} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    errorHandler={props.errorHandler}
                />,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
