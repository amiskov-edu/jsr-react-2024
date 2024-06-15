import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/get-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});
