import React, { useState } from "react";

const NewUserForm = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const modalHandler = () => {
        const title = "Invalid Name/age";
        const content = "enter a valid name/title for the user";
        props.setModalContent({ title: title, content: content });
        props.modalHandler();
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredAge && enteredName) {
            const userData = {
                name: enteredName,
                age: +enteredAge,
                id: Math.random().toString(),
            };

            props.addUserHandler(userData);

            setEnteredName("");
            setEnteredAge("");
        }

        if (!enteredAge || !enteredName) {
            modalHandler();
        }
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>Name</label>
                <input
                    type="text"
                    value={enteredName}
                    onChange={nameChangeHandler}
                ></input>
                <label>Age</label>
                <input
                    type="number"
                    min="1"
                    step="1"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                ></input>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default NewUserForm;
