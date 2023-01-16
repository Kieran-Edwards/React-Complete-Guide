import React, { useContext, useState } from "react";

import "./Cart.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [checkoutActive, setCheckoutActive] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const CartItems = (
        <ul className="cart-items">
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const orderHandler = () => {
        setCheckoutActive(true);
    };

    const submitOrderHandler = async (userData) => {
        setSubmitting(true);
        await fetch(
            "https://react-course-bd755-default-rtdb.firebaseio.com/orders.json",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items,
                }),
            }
        );
        setSubmitting(false);
        setSubmitted(true);
        cartCtx.clearCart();
    };

    const modalActions = (
        <div className="actions">
            <button className="button--alt" onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className="button" onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {CartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {checkoutActive && (
                <Checkout
                    onConfirm={submitOrderHandler}
                    onClose={props.onClose}
                />
            )}
            {!checkoutActive && modalActions}
        </React.Fragment>
    );

    const submittingModalContent = <p>Sending order data...</p>;

    const submittedOrderData = (
        <React.Fragment>
            <p>Order recieved! Thanks!</p>
            <div className="actions">
                <button className="button" onClick={props.onClose}>
                    Close
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!submitting && !submitted && cartModalContent}
            {submitting && !submitted && submittingModalContent}
            {submitted && submittedOrderData}
        </Modal>
    );
};

export default Cart;
