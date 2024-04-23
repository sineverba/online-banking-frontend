import extraValues from "@/app/lib/constants";
import { isAuthenticated } from "@/app/lib/utility";
const { login } = require("../__mocks__/responses/auth/login");

describe("Test utility utils file", () => {
  it("Test can return true if user is authenticated", () => {
    sessionStorage.setItem(
      extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN"),
      login.access_token
    );
    expect(isAuthenticated()).toBe(true);
  });

  it("Test can return false if user is not authenticated", () => {
    expect(isAuthenticated()).toBe(false);
  });

  it("Test can return false if window is undefined", () => {
    delete global.window;
    expect(isAuthenticated()).toBe(false);
  });
});
