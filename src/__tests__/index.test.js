import index from "../index";

describe("Test index.js", () => {
  it("Should render app without crashing", () => {
    expect(
      JSON.stringify(
        Object.assign({}, index, { _reactInternalInstance: "censored" })
      )
    ).toMatchSnapshot();
  });
});
