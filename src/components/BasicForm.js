import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        changeHandler: nameChangeHandler,
        touchHandler: nameTouchHandler,
        reset: nameReset,
    } = useInput((value) => value.trim() !== "");

    const {
        value: surnameValue,
        isValid: surnameIsValid,
        hasError: surnameHasError,
        changeHandler: surnameChangeHandler,
        touchHandler: surnameTouchHandler,
        reset: surnameReset,
    } = useInput((value) => value.trim() !== "");

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        changeHandler: emailChangeHandler,
        touchHandler: emailTouchHandler,
        reset: emailReset,
    } = useInput((value) => /(.+)@(.+){2,}\.(.+){2,}/.test(value));

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (nameHasError || surnameHasError || emailHasError) {
            return;
        }

        console.log(nameValue, surnameValue, emailValue);

        nameReset();
        surnameReset();
        emailReset();
    };

    const nameClass = !nameHasError ? "form-control" : "form-control invalid";
    const surnameClass = !surnameHasError
        ? "form-control"
        : "form-control invalid";
    const emailClass = !emailHasError ? "form-control" : "form-control invalid";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={nameClass}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={nameValue}
                        onBlur={nameTouchHandler}
                        onChange={nameChangeHandler}
                    />
                    {nameHasError && <p>Enter a valid Name</p>}
                </div>
                <div className={surnameClass}>
                    <label htmlFor="surname">Last Name</label>
                    <input
                        type="text"
                        id="surname"
                        value={surnameValue}
                        onBlur={surnameTouchHandler}
                        onChange={surnameChangeHandler}
                    />
                    {surnameHasError && <p>Enter a valid Surname</p>}
                </div>
            </div>
            <div className={emailClass}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    value={emailValue}
                    onBlur={emailTouchHandler}
                    onChange={emailChangeHandler}
                />
                {emailHasError && <p>Enter a valid E-mail</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
