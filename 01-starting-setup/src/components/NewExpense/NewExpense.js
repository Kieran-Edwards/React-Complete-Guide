import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [newExpenseOpen, setNewExpenseOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        setNewExpenseOpen(!newExpenseOpen);

        props.onAddExpense(expenseData);
    };

    const newExpenseOpenHandler = () => {
        setNewExpenseOpen(!newExpenseOpen);
    };

    return (
        <div className="new-expense">
            {!newExpenseOpen && (
                <button onClick={newExpenseOpenHandler}>Add New Expense</button>
            )}
            {newExpenseOpen && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onNewExpenseCancel={newExpenseOpenHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
