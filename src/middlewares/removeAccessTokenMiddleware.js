import { createListenerMiddleware } from "@reduxjs/toolkit";
import { LOCALSTORAGE_ACCESS_TOKEN } from "../utils/constants/constant";

/**
 * When we receive action to delete loginSlice,
 * delete localStorage
 */

const type = `apiSlice/resetApiState`;

const removeAccessTokenMiddleware = createListenerMiddleware();
removeAccessTokenMiddleware.startListening({
  type,
  effect: () => {
    localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN);
  }
});

export default removeAccessTokenMiddleware;
