import extraValues from "./constants";
import { isAuthenticated } from "./utility";

/**
 * Create a preloaded store.
 */
export const getPreloadedStore = () => ({});

export const getHeaders = (headers) => {
  if (isAuthenticated()) {
    headers.set(
      "Authorization",
      `Bearer ${sessionStorage.getItem(
        extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN")
      )}`
    );
  }
  return headers;
};
