// tests/app.test.js
const { add } = require("../app");

describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("handles negative numbers", () => {
    expect(add(-1, 3)).toBe(2);
  });

  test("handles zeros", () => {
    expect(add(0, 0)).toBe(0);
  });
});