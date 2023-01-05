import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [inputNameIsValid, setInputNameIsValid] = useState(true);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim() === "") {
            setInputNameIsValid(false);
            return;
        }

        console.log(enteredName);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName("");
    };

    const formControlClass = inputNameIsValid
        ? "form-control"
        : "form-control invalid";

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
                />
            </div>
            {!inputNameIsValid && <p>Please enter a valid name</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
