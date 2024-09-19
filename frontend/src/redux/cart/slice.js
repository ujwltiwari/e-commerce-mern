import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const pId = action.payload;
      state.cart = [...state.cart, pId];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
