import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";

import "./AddUser.css";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Enter valid name and Age (non-empty)",
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Enter valid Age",
            });
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);

        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
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
                        <input type="text" id="name" ref={nameInputRef}></input>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            step="1"
                            ref={ageInputRef}
                        ></input>
                        <Button type="submit">Add User</Button>
                    </form>
                </div>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
