import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import "./AddUser.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Enter valid name and Age (non-empty)",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Enter valid Age",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredAge("");
        setEnteredUsername("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    errorHandler={errorHandler}
                />
            )}
            <Card>
                <div className="input">
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={usernameChangeHandler}
                            value={enteredUsername}
                        ></input>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            step="1"
                            onChange={ageChangeHandler}
                            value={enteredAge}
                        ></input>
                        <Button type="submit">Add User</Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AddUser;
