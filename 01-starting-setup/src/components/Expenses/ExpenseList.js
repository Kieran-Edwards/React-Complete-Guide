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

    return (
        <div>
            <Card className="expense-list">
                <ExpenseFilter
                    onFilterChange={filterChangeHandler}
                    selectedYear={selectedYear}
                />

                {props.expenses.map((expense) => (
                    <ExpenseItem
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
