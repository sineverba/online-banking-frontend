import extraValues from "./constants";

/**
 *
 * Test if user is authenticated, looking for a token inside the sessionStorage.
 *
 * @returns bool true if authenticated, otherwise false
 */
export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    return !!sessionStorage.getItem(
      extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN")
    );
  }
  return false;
};

/**
 * Delete the sessionStorage for a logged user.
 *
 * @returns bool true if sessionStorage is removed, otherwise false
 */
export const logout = () => {
  if (isAuthenticated()) {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN"));
      return true;
    }
  }
  return false;
};

/**
 * Set the sessionStorage with the access token
 *
 * @param {string} accessToken the accessToken
 * @returns
 */
export const login = (accessToken) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(
      extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN"),
      accessToken
    );
    return true;
  }
  return false;
};
