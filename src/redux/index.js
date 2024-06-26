import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./entities/user";
import { RestaurantSlice } from "./entities/restaurant";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";

export const store = configureStore({
  reducer: combineSlices(UserSlice, RestaurantSlice, DishSlice, ReviewSlice),
});
