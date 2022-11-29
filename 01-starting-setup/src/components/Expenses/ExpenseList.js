import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./expenseFilter";

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
                <ExpenseItem
                    title={props.expenses[0].title}
                    price={props.expenses[0].price}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    price={props.expenses[1].price}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    price={props.expenses[2].price}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    price={props.expenses[3].price}
                    date={props.expenses[3].date}
                />
            </Card>
        </div>
    );
};

export default ExpenseList;
