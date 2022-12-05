import React from "react";

import Card from "./Card";
import Button from "./Button";

import "./ErrorModal.css";

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.errorHandler}></div>
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
        </div>
    );
};

export default ErrorModal;
