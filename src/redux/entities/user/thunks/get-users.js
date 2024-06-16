import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";
import { BASE_URL } from "../../../../constants/endpoints";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async () => {
    const response = await fetch(`${BASE_URL}/users/`);
    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectUserIds(getState())?.length,
  },
);
