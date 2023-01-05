import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [inputNameIsTouched, setInputNameIsTouched] = useState(false);
    const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);

    const inputNameIsValid = enteredName.trim() !== "";
    const inputEmailIsValid = /(.+)@(.+){2,}\.(.+){2,}/.test(enteredEmail);

    const touchedNameInputIsInvalid = inputNameIsTouched && !inputNameIsValid;
    const touchedEmailInputIsInvalid =
        inputEmailIsTouched && !inputEmailIsValid;

    let formIsValid = false;

    if (inputNameIsValid && inputEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameInputTouchHandler = () => {
        setInputNameIsTouched(true);
    };

    const emailInputTouchHandler = () => {
        setInputEmailIsTouched(true);
    };

    const resetForm = () => {
        setEnteredName("");
        setEnteredEmail("");

        setInputNameIsTouched(false);
        setInputEmailIsTouched(false);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        nameInputTouchHandler();
        emailInputTouchHandler();

        if (!inputNameIsValid || !inputEmailIsValid) {
            return;
        }

        console.log(enteredName);

        resetForm();
    };

    const nameControlClass = touchedNameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    const emailControlClass = touchedEmailInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameControlClass}>
                <label htmlFor="name">Your Name</label>
                <input
                    onChange={nameInputChangeHandler}
                    type="text"
                    id="name"
                    value={enteredName}
                    onBlur={nameInputTouchHandler}
                />
                {touchedNameInputIsInvalid && <p>Please enter a valid name</p>}
            </div>

            <div className={emailControlClass}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    onChange={emailInputChangeHandler}
                    type="text"
                    id="email"
                    value={enteredEmail}
                    onBlur={emailInputTouchHandler}
                />
                {touchedEmailInputIsInvalid && (
                    <p>Please enter a valid e-mail</p>
                )}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
