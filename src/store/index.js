import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import addAccessTokenMiddleware from "../middlewares/addAccessTokenMiddleware";
import removeAccessTokenMiddleware from "../middlewares/removeAccessTokenMiddleware";

const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
      })
        .prepend(addAccessTokenMiddleware.middleware)
        .prepend(removeAccessTokenMiddleware.middleware)
        .concat(apiSlice.middleware)
  });

export default setupStore;
