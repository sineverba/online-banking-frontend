import getRequired from "../../../utils/methods/getRequired";

describe("Test getRequired", () => {
  it("Can return required fields from a list of fields", () => {
    const fields = [
      {
        id: 1,
        name: "username",
        type: "text",
        required: true
      },
      {
        id: 2,
        name: "password",
        type: "password",
        required: true
      },
      {
        id: 3,
        name: "foo",
        type: "foo"
      }
    ];

    const expectedResult = ["username", "password"];

    expect(getRequired(fields)).toStrictEqual(expectedResult);
  });
});
