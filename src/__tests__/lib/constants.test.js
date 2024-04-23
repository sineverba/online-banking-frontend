import extraValues from "@/app/lib/constants";

describe("Constants file", () => {
  it("Can return value for BACKEND_URL", () => {
    const currentBackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    expect(extraValues.get("BACKEND_URL")).toBe(currentBackendUrl);
  });

  it("Can return value for PING_URL", () => {
    const currentPingUrl = "ping";
    expect(extraValues.get("URL_PING")).toBe(currentPingUrl);
  });

  it("Can return value for redux ping tags", () => {
    const currentPingTag = "ping";
    expect(extraValues.get("REDUX_TAG_PING")).toBe(currentPingTag);
  });

  it("Can return value for redux api slice", () => {
    const reduxApiSlice = "apiSlice";
    expect(extraValues.get("REDUX_REDUCER_PATH")).toBe(reduxApiSlice);
  });

  it("Can return value for regex only number and char, without special char", () => {
    const regex = /[^a-zA-Z0-9]/g;
    expect(extraValues.get("REGEX_ONLY_CHAR_NUMBER")).toStrictEqual(regex);
  });

  it("Can return value for session storage access token", () => {
    const currentSessionStorageAccessTokenName =
      "OnlineBankingFrontendAccessToken";
    expect(extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN")).toBe(
      currentSessionStorageAccessTokenName
    );
  });
});
