import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import "./ExpenseList.css";

const ExpenseList = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() == selectedYear;
    });

    return (
        <div>
            <Card className="expense-list">
                <ExpenseFilter
                    onFilterChange={filterChangeHandler}
                    selectedYear={selectedYear}
                />

                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default ExpenseList;
