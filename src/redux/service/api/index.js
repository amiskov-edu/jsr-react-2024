import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants/endpoints";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Restaurant"],
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
        url: "/reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "All" },
            { type: "Restaurant", id: restaurantId },
          ),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Restaurant", id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ review }) => ({
        url: `/review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, { review }) => [
        { type: "Review", id: review.id },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;