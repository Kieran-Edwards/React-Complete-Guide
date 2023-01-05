import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [inputNameIsTouched, setInputNameIsTouched] = useState(false);

    const inputNameIsValid = enteredName.trim() !== "";
    const touchedNameInputIsInvalid = inputNameIsTouched && !inputNameIsValid;

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputTouchHandler = () => {
        setInputNameIsTouched(true);
    };

    const nameInputBlurHandler = () => {
        setInputNameIsTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        nameInputTouchHandler();

        if (!inputNameIsValid) {
            return;
        }

        console.log(enteredName);

        setEnteredName("");
        setInputNameIsTouched(false);
    };

    const formControlClass = touchedNameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={formControlClass}>
                <label htmlFor="name">Your Name</label>
                <input
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
