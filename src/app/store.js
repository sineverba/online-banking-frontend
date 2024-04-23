import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";

const setupStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([apiSlice.middleware])
  });

export default setupStore;
