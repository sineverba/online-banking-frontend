import { LOCALSTORAGE_ACCESS_TOKEN } from "../../../utils/constants/constant";
import prepareHeaders from "../../../utils/methods/prepareHeaders";
import headers from "../../__mocks__/items/headers";
import { accessToken } from "../../__mocks__/items/accessToken";

beforeEach(() => {
  localStorage.clear();
  headers.clear();
});

describe("Test prepareHeaders", () => {
  it("Can add LOCALSTORAGE_ACCESS_TOKEN to the headers if it is present", () => {
    // Set the localStorage
    localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN, accessToken);
    // Prepeare headers returns a MAP!
    expect(prepareHeaders(headers).has("authorization")).toBeTruthy();
  });

  it("Cannot add LOCALSTORAGE_ACCESS_TOKEN to the headers if it is not present", () => {
    // Prepeare headers returns a MAP!
    expect(prepareHeaders(headers).has("authorization")).toBeFalsy();
  });
});
