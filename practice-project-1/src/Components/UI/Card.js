import React from "react";

import "./Card.css";

const Card = (props) => {
    return <div className="card input">{props.children}</div>;
};

export default Card;
