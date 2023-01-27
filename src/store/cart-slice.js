import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            console.log(newItem);

            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    itemPrice: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state, action) {
            console.log("test2");
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item) => item.id !== newItem.id
                );
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - newItem.price;
            }
        },
    },
});

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
                { method: "PUT", body: JSON.stringify(cart) }
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

export const cartActions = cartSlice.actions;

export default cartSlice;
