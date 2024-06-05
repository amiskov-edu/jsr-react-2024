import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/restaurants-normalized";

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: normalizedRestaurants.reduce((acc, rest) => {
      acc[rest.id] = rest;
      return acc
    }, {}),
    ids: normalizedRestaurants.map(restaurant => restaurant.id),
  }
});
