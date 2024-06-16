import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectDishIds } from "../../dish/selectors";
import { BASE_URL } from "../../../../constants/endpoints";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async ({ restaurantId }) => {
    const response = await fetch(
      `${BASE_URL}/reviews?restaurantId=${restaurantId}`,
    );
    return response.json();
  },
  {
    condition: ({ restaurantId, forceRefetch = false } = {}, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewIds(
        state,
        restaurantId,
      );
      if (forceRefetch || !restaurantReviewIds?.length) {
        return true;
      }
      const loadedReviewIds = selectDishIds(state);
      return restaurantReviewIds.some((id) => !loadedReviewIds.includes(id));
    },
  },
);
