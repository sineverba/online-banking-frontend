import extraValues from "@/app/lib/constants";
import { getHeaders } from "@/app/lib/utilityStore";
import { login } from "../__mocks__/responses/auth/login";
import headers from "../__mocks__/items/headers";

beforeEach(() => {
  sessionStorage.clear();
});

describe("Test utilityStore utils file", () => {
  it("Test can return headers without authorization if no token is provided", () => {
    expect(getHeaders(headers).has("foo")).toBeTruthy();
    expect(getHeaders(headers).has("Authorization")).toBeFalsy();
  });

  it("Test can return headers with authorization if token is provided", () => {
    sessionStorage.setItem(
      extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN"),
      login.access_token
    );
    expect(getHeaders(headers).has("foo")).toBeTruthy();
    expect(getHeaders(headers).has("Authorization")).toBeTruthy();
    expect(getHeaders(headers).get("Authorization")).toBe(
      `Bearer ${login.access_token}`
    );
  });
});
