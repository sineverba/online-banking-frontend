describe("env test file", () => {
  it("Can handle env test file with API URL", () => {
    const testBackendUrl = "https://bitbankapi.k2p.it/api/v1/";
    const currentBackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    expect(currentBackendUrl).toBe(testBackendUrl);
  });
});
