import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>28th March 2021</div>
            <div className="expense-item__description">
                <h2>Insurance</h2>
                <div className="expense-item__price">£257.97</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
