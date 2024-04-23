import { logout } from "@/app/lib/utility";
import { login } from "../__mocks__/responses/auth/login";
import extraValues from "@/app/lib/constants";

describe("Test utility utils file", () => {
  it("Test return true deleting the sessionStorage", () => {
    sessionStorage.setItem(
      extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN"),
      login.access_token
    );
    expect(logout()).toBe(true);
  });

  it("Test return false deleting a sessionStorage", () => {
    expect(logout()).toBe(false);
  });
});
