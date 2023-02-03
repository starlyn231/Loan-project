import { createSlice } from "@reduxjs/toolkit";
import { test } from "../../view/RequestSeats/MockRequest";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.costo * action.payload.quantity;
    },
    increase: (state, action) => {
      state.quantity += 1;
    },

    /*incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },*/
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});


export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  increase
} = cartSlice.actions;

export default cartSlice.reducer;