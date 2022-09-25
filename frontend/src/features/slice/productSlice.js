import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CART_URL = 'http://localhost:3000/api/v1/cart/';

const initialState = {
  product: [],
  status: 'idle',
  error: null,
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    try {
      const response = await axios.get(CART_URL);
      return response.data.product;
    } catch (err) {
      return err.message;
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeded';
        const loadedProduct = action.payload.map((item) => {
          return item;
        });
        state.product = state.product.concat(loadedProduct);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const showAllProduct = (state) => state.product.product;
export const productStatus = (state) => state.product.status;
export const productError = (state) => state.product.error;

export default productSlice.reducer;
