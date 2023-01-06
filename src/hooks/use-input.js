import { useState } from "react";

const useInput = (validation) => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);

    const isValid = validation(value);
    const hasError = !isValid && touched;

    const changeHandler = (e) => {
        setValue(e.target.value);
    };

    const touchHandler = () => {
        setTouched(true);
    };

    const reset = () => {
        setValue("");
        setTouched(false);
    };

    return {
        value,
        isValid,
        hasError,
        changeHandler,
        touchHandler,
        reset,
    };
};

export default useInput;
