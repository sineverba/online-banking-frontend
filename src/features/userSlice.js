import { createSlice } from "@reduxjs/toolkit";
import { ACTION_SET_USERNAME } from "../utils/constants/constant";

/**
 * Declare an empty, initial state
 */
const initialState = {
  username: null
};
/**
 * Fetch the actions from the constants
 */
const actionSetUsername = ACTION_SET_USERNAME;

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    [actionSetUsername]: (state, action) => {
      state.username = action.payload.data;
    }
  }
});

/**
 * Names of the export must be the same declared on
 * constants
 */
export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
