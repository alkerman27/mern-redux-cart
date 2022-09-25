import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import productReducer from "../slice/productSlice";
import toggleReducer from "../slice/toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
