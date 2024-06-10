import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./restaurant/thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {},
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});
