import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const item = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      const newItems = {
        title: item.title,
        price: item.price,
        quantity: 1,
        total: item.price,
        id: item.id,
      };
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItem.push(newItems);
      } else {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      }
    },
    addItems(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItem.find((item) => item.id === id);
      state.totalQuantity++;
      existingItem.quantity++;
      existingItem.total += existingItem.price;
    },
    removeItems(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItem.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});

export const displayCart = (state) => state.cart;

export const { addToCart, addItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
