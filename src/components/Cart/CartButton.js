import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartButtonHandler = () => {
        dispatch(uiActions.toggle());
    };

    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <button onClick={cartButtonHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
