import { initializeConnect } from "react-redux/es/components/connect";
import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterReducer = (state = intialState, action) => {
    if (action.type === "increase") {
        return { ...state, counter: state.counter + 1 };
    }

    if (action.type === "increaseBy") {
        return { ...state, counter: state.counter + action.amount };
    }

    if (action.type === "decrease") {
        return { ...state, counter: state.counter - 1 };
    }

    if (action.type === "toggle") {
        return { ...state, showCounter: !state.showCounter };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
