import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    decrement: (state, { payload }) => {
      if (state[payload] === undefined) {
        // may be `0`
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
    clear: () => {
      return {};
    },
  },
});

export const { increment, decrement, clear } = CartSlice.actions;
