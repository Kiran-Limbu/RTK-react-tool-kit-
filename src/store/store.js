import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cart-sclice"

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store;