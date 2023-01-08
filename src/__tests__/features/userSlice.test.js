import reducer, { setUsername } from "../../features/userSlice";
import { email } from "../__mocks__/items/email";

describe("Test userSlice", () => {
  const initialState = { username: null };

  it("Test can set username", () => {
    const action = { type: setUsername, payload: {data: email} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      username: email,
    });
  });
});
