import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";
import { BASE_URL } from "../../../../constants/endpoints";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    const response = await fetch(`${BASE_URL}/restaurants/`);
    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectRestaurantIds(getState())?.length,
  },
);
