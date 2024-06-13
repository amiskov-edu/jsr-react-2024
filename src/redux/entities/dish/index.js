import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/restaurants-normalized";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    }, {}),
    ids: normalizedDishes.map((dish) => dish.id),
  },
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});
