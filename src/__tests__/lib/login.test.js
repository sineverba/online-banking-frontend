import { login as loginFunction } from "@/app/lib/utility";
import { login } from "../__mocks__/responses/auth/login";

describe("Test utility utils file", () => {
  it("Test return true loggin in", () => {
    expect(loginFunction(login.access_token)).toBe(true);
  });

  it("Test can return false if window is undefined", () => {
    delete global.window;
    expect(loginFunction(login.access_token)).toBe(false);
  });
});
