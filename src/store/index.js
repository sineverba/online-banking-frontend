import { configureStore } from "@reduxjs/toolkit";
import { accessTokenSlice } from "../features/accessTokenSlice";
import { userSlice } from "../features/userSlice";
import { loginSlice } from "../features/loginSlice";
import { balanceSlice } from "../features/balanceSlice";
import addAccessTokenMiddleware from "../middlewares/addAccessTokenMiddleware";
import removeAccessTokenMiddleware from "../middlewares/removeAccessTokenMiddleware";

const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      [loginSlice.reducerPath]: loginSlice.reducer,
      [balanceSlice.reducerPath]: balanceSlice.reducer,
      accessTokenSlice: accessTokenSlice.reducer,
      userSlice: userSlice.reducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
      })
        .prepend(addAccessTokenMiddleware.middleware)
        .prepend(removeAccessTokenMiddleware.middleware)
        .concat(loginSlice.middleware)
        .concat(balanceSlice.middleware)
  });

export default setupStore;
