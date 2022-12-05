import React, { useReducer } from "react";

import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
    return (
        <Card>
            <div className="users">
                <ul>
                    {props.users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default UsersList;
