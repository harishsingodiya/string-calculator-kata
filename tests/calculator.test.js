const add = require("../src/calculator");

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number if only one number", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum for two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("handles any amount of numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("supports newline as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("throws error for negative numbers", () => {
    expect(() => add("1,-2,-5")).toThrow("negative numbers not allowed -2,-5");
  });
});
