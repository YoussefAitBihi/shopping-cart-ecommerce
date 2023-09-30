import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartIsOpen: false,
  cartIsAnimated: false,
  quantity: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    animateCart: (state) => {
      state.cartIsAnimated = !state.cartIsAnimated;
    },
    openCart: (state) => {
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
    },
    addItemToCart: (state, action) => {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      // Already exist
      if (existingCartItemIndex !== -1) {
        state.items[existingCartItemIndex].amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }

      state.quantity += action.payload.amount;
    },
    removeItemFromCart: (state, action) => {
      const removedItem = state.items.find((item) => {
        return item.id === action.payload;
      });

      const filteredItems = state.items.filter((item) => {
        return item.id !== action.payload;
      });

      state.items = filteredItems;
      state.quantity -= removedItem.amount;
    },
  },
});

export const cartActions = cart.actions;

const cartReducer = cart.reducer;

export default cartReducer;
