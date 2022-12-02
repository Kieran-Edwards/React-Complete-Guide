import React from "react";

import UserDetails from "./UserDetails";

const UserList = (props) => {
    return (
        <div>
            {props.users.map((user) => (
                <UserDetails key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
