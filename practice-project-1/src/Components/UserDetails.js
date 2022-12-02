import React from "react";

const UserDetails = (props) => {
    return (
        <div>
            {props.user.name}
            {props.user.age}
        </div>
    );
};

export default UserDetails;
