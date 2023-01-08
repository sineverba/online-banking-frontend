import { createSlice } from "@reduxjs/toolkit";
import {
  ACTION_SET_ACCESS_TOKEN,
  ACTION_LOGOUT,
  ACTION_SET_LOADING
} from "../utils/constants/constant";

const initialState = {
  accessToken: null,
  loading: false
};

const actionLogout = ACTION_LOGOUT;
const actionSetAccessToken = ACTION_SET_ACCESS_TOKEN;
const actionSetLoading = ACTION_SET_LOADING;

export const accessTokenSlice = createSlice({
  name: "accessTokenSlice",
  initialState,
  reducers: {
    [actionLogout]: (state) => {
      state.accessToken = null;
      state.idToken = null;
      state.loading = false;
    },
    [actionSetAccessToken]: (state, action) => {
      state.accessToken = action.payload.data;
    },
    [actionSetLoading]: (state, action) => {
      state.loading = action.payload.data;
    }
  }
});

/**
 * Names of the export must be the same declared on
 * constants
 */
export const { logout, setAccessToken, setLoading } =
  accessTokenSlice.actions;

export default accessTokenSlice.reducer;
