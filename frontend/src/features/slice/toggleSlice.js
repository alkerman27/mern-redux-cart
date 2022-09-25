import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const toToggleCart = (state) => state.toggle.isToggle;

export const { toggleCart } = toggleSlice.actions;

export default toggleSlice.reducer;
