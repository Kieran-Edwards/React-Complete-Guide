import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const intialState = { counter: 0, showCounter: true };

createSlice({
    name: "counter",
    intialState,
    reducers: {
        increase(state) {
            state.counter++;
        },
        descrease(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

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
