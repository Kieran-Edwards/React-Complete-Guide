import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;

export default cartSlice;
