import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants/endpoints";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: `/dishes`,
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: `/reviews`,
        params: { restaurantId },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
} = apiService;
