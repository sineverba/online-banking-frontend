import { createListenerMiddleware } from "@reduxjs/toolkit";
import { LOCALSTORAGE_ACCESS_TOKEN } from "../utils/constants/constant";

/**
 * When we receive the token after login,
 * store it into localStorage
 */

const type = `apiSlice/executeMutation/fulfilled`;

const addAccessTokenMiddleware = createListenerMiddleware();
addAccessTokenMiddleware.startListening({
  type,
  effect: (action) => {
    localStorage.setItem(
      LOCALSTORAGE_ACCESS_TOKEN,
      action.payload.access_token
    );
  }
});

export default addAccessTokenMiddleware;
