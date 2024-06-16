import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./entities/user";
import { RestaurantSlice } from "./entities/restaurant";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";
import { CartSlice } from "./ui/cart";
import { RequestSlice } from "./ui/request";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(
    UserSlice,
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    CartSlice,
    RequestSlice,
    apiService,
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
  devTools: import.meta.env.DEV, // Example of Vite's ENV variable usage.
});
