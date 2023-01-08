import reducer, { setAccessToken, setLoading } from "../../features/accessTokenSlice";
import { accessTokenSlice as initialState } from "../__mocks__/items/accessTokenSlice";
import { accessToken } from "../__mocks__/items/accessToken";

describe("Test accessTokenSlice", () => {
  

  it("Test can set access token", () => {
    const action = { type: setAccessToken, payload: {data: accessToken} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      accessToken: accessToken,
      loading: false,
    });
  });

  it("Test can set loading as true", () => {
    const action = { type: setLoading, payload: {data: true} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      accessToken: null,
      loading: true,
    });
  });

  it("Test can set loading as false", () => {
    const action = { type: setLoading, payload: {data: false} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      accessToken: null,
      loading: false,
    });
  });
});
