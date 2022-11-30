import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const ExpenseList = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === selectedYear;
    });

    return (
        <div>
            <Card className="expense-list">
                <ExpenseFilter
                    onFilterChange={filterChangeHandler}
                    selectedYear={selectedYear}
                />

                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default ExpenseList;
