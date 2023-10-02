import { createSlice } from "@reduxjs/toolkit";

const carouselModal = createSlice({
  name: "carousel",
  initialState: {
    carouselModalIsVisible: false,
  },
  reducers: {
    showModal(state) {
      state.carouselModalIsVisible = true;
    },
    hideModal(state) {
      state.carouselModalIsVisible = false;
    },
  },
});

export const carouselActions = carouselModal.actions;
export const carouselReducer = carouselModal.reducer;
