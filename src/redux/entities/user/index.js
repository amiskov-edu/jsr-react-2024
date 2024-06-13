import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/restaurants-normalized";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {}),
    ids: normalizedUsers.map((user) => user.id),
  },
});
