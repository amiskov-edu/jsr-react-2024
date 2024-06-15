import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantMenu } from "../../restaurant/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
    );
    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestaurantMenu(state, restaurantId);
      // Запрос уйдёт, если true
      return restaurantDishIds.some(id => !loadedDishIds.includes(id));
    }
  }
);
