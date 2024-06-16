import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async () => {
    const response = await fetch("http://localhost:3001/api/users/");
    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectUserIds(getState())?.length,
  },
);
