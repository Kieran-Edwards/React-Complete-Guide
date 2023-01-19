import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const showCounter = useSelector((state) => state.showCounter);

    const increaseHandler = () => {
        dispatch({ type: "increase" });
    };

    const increaseByHandler = () => {
        dispatch({ type: "increaseBy", amount: 5 });
    };

    const decreaseHandler = () => {
        dispatch({ type: "decrease" });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: "toggle" });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increaseHandler}>increase</button>
                <button onClick={increaseByHandler}>increase 5</button>
                <button onClick={decreaseHandler}>decrease</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
