import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "setValue":
            return { ...state, value: action.payload };
        case "setTouched":
            return { ...state, touched: action.payload };
        case "reset":
            return { value: "", touched: false };
        default:
            throw new Error();
    }
};

const useInput = (validation) => {
    const [state, dispatch] = useReducer(reducer, {
        value: "",
        touched: false,
    });

    const isValid = validation(state.value);
    const hasError = !isValid && state.touched;

    const changeHandler = (e) => {
        dispatch({ type: "setValue", payload: e.target.value });
    };

    const touchHandler = () => {
        dispatch({ type: "setTouched", payload: true });
    };

    const reset = () => {
        dispatch({ type: "reset" });
    };

    return {
        value: state.value,
        isValid,
        hasError,
        changeHandler,
        touchHandler,
        reset,
    };
};

export default useInput;
