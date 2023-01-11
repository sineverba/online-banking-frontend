import { createListenerMiddleware } from "@reduxjs/toolkit";
import { ACTION_LOGOUT, LOCALSTORAGE_ACCESS_TOKEN } from "../utils/constants/constant";

const type = `accessTokenSlice/${ACTION_LOGOUT}`;

/**
 * Remove the token from localstorage
 * on logout action
 */

const removeAccessTokenMiddleware = createListenerMiddleware();
removeAccessTokenMiddleware.startListening({
  type,
  effect: () => {
    localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN);
  }
});

export default removeAccessTokenMiddleware;