import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        changeHandler: nameChangeHandler,
        touchHandler: nameTouchHandler,
        reset: nameReset,
    } = useInput((value) => value.trim() !== "");

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        changeHandler: emailChangeHandler,
        touchHandler: emailTouchHandler,
        reset: emailReset,
    } = useInput((value) => /(.+)@(.+){2,}\.(.+){2,}/.test(value));

    let formIsValid = false;

    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!nameIsValid || !emailIsValid) {
            return;
        }

        console.log(nameValue, emailValue);

        nameReset();
        emailReset();
    };

    const nameControlClass = nameHasError
        ? "form-control invalid"
        : "form-control";

    const emailControlClass = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameControlClass}>
                <label htmlFor="name">Your Name</label>
                <input
                    onChange={nameChangeHandler}
                    type="text"
                    id="name"
                    value={nameValue}
                    onBlur={nameTouchHandler}
                />
                {nameHasError && <p>Please enter a valid name</p>}
            </div>

            <div className={emailControlClass}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    onChange={emailChangeHandler}
                    type="text"
                    id="email"
                    value={emailValue}
                    onBlur={emailTouchHandler}
                />
                {emailHasError && <p>Please enter a valid e-mail</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
