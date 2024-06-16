import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async ({ restaurantId }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
    );
    return response.json();
  },
  {
    condition: ({ restaurantId, forceRefetch = false } = {}, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
      if (forceRefetch || !restaurantDishIds?.length) {
        return true;
      }
      const loadedDishIds = selectDishIds(state);
      return restaurantDishIds.some((id) => !loadedDishIds.includes(id));
    },
  },
);
