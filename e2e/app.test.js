describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("OPEN_DRAWER"))).toBeVisible();
    await element(by.id("OPEN_DRAWER")).tap();
  });
});
