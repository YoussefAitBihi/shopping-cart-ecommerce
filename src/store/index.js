import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import { carouselReducer } from "./carousel-modal-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    carouselModal: carouselReducer,
  },
});

export default store;
