import { getPreloadedStore } from "@/app/lib/utilityStore";

describe("Test utilityStore utils file", () => {
  it("Test can return empty object when sessionStorage is null", () => {
    const result = getPreloadedStore();
    expect(result).toStrictEqual({});
  });
});
