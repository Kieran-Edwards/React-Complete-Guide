import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [inputNameIsValid, setInputNameIsValid] = useState(false);
    const [inputNameIsTouched, setInputNameIsTouched] = useState(false);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        if (event.target.value.trim() !== "") {
            setInputNameIsValid(true);
        }
    };

    const nameInputTouchHandler = () => {
        setInputNameIsTouched(true);
    };

    const nameInputBlurHandler = () => {
        setInputNameIsTouched(true);

        if (enteredName.trim() === "") {
            setInputNameIsValid(false);
            return;
        }
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        nameInputTouchHandler();

        if (enteredName.trim() === "") {
            setInputNameIsValid(false);
            return;
        }

        console.log(enteredName);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName("");
    };

    const touchedNameInputIsInvalid = inputNameIsTouched && !inputNameIsValid;

    const formControlClass = touchedNameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={formControlClass}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    onChange={nameInputChangeHandler}
                    type="text"
                    id="name"
                    value={enteredName}
                    onBlur={nameInputBlurHandler}
                />
            </div>
            {touchedNameInputIsInvalid && <p>Please enter a valid name</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
