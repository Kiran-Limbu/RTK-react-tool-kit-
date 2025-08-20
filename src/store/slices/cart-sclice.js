import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart(state, action) {
            return state.filter((items) => items.id !== action.payload);
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
