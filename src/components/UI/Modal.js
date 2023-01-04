import { Fragment } from "react";
import ReactDom from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
};

const portalElem = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElem
            )}
            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElem
            )}
        </Fragment>
    );
};

export default Modal;
