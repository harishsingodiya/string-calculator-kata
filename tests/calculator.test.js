const add = require("../src/calculator");

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("throws error for negative numbers", () => {
    expect(() => add("1,-2,-5")).toThrow("negative numbers not allowed -2,-5");
  });
});
