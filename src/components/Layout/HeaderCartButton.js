import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `headerCartButton ${buttonIsHighlighted ? "bump" : ""}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
