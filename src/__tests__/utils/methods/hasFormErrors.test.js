import hasFormErrors from "../../../utils/methods/hasFormErrors";

describe("Test hasFormErrors", () => {
  it("Can return true if there are errors", () => {
    const itemToCheck = {
      foo: "value",
      baz: "missing",
    };

    const required = ["foo", "bar"];

    expect(hasFormErrors(itemToCheck, required)).toBe(true);
  });

  it("Can return false if there are not errors", () => {
    const itemToCheck = {
      foo: "value",
      baz: "missing",
      bar: "present",
    };

    const required = ["foo", "bar"];

    expect(hasFormErrors(itemToCheck, required)).toBe(false);
  });

  it("Can manage null values", () => {
    const itemToCheck = {
      foo: null,
      baz: "missing",
      bar: "present",
    };

    const required = ["foo", "bar"];

    expect(hasFormErrors(itemToCheck, required)).toBe(true);
  });

  it("Can manage empty itemToCheck", () => {
    const itemToCheck = {};

    const required = ["foo", "bar"];

    expect(hasFormErrors(itemToCheck, required)).toBe(true);
  });

  it("Can manage null itemToCheck", () => {
    const itemToCheck = null;

    const required = ["foo", "bar"];

    expect(hasFormErrors(itemToCheck, required)).toBe(true);
  });
});
