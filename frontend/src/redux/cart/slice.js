import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("add to cart ", action.payload);
      const pId = action.payload;
      // If Product is Already in Cart, Don't add it
      if (state.cart.includes(pId)) {
        return;
      }
      state.cart = [...state.cart, pId];
    },
    removeFromCart: (state, action) => {
      console.log("add to cart ", action.payload);
      const pId = action.payload;
      state.cart = [...state.cart.filter((x) => x !== pId)];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
