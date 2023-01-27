import { uiActions } from "./ui-slice";

import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const resp = await fetch(
                "https://react-course-bd755-default-rtdb.firebaseio.com/cart.json"
            );

            if (!resp.ok) {
                throw new Error("fetching data failed");
            }

            const data = await resp.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "ERROR!",
                    message: "Error fetching cart data",
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending Data",
                message: "Please Hold...",
            })
        );

        const sendReq = async () => {
            const response = await fetch(
                "https://react-course-bd755-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items || [],
                        totalQuantity: cart.totalQuantity,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("sending data failed");
            }
        };

        try {
            await sendReq();

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Data Sent",
                    message: "Cart Data sent successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "ERROR!",
                    message: "Error sending cart data",
                })
            );
        }
    };
};
