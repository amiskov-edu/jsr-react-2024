import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async ({ restaurantId }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
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
      const loadedReviewIds = selectReviewIds(state);
      return restaurantReviewIds.some((id) => !loadedReviewIds.includes(id));
    },
  },
);
