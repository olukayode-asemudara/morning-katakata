import AscendingSquaredArray from "../src/AscendingSquaredArray.js";

test("test I can sort and square the elements of an array", () => {
  const squaredArray = new AscendingSquaredArray();
  expect(squaredArray.getSquaredSortedArray([3, 5, 2, 1])).toBe([1, 4, 9, 25]);
});

test("test I pass invalid arguments into an array", () => {
  const squaredArray = new AscendingSquaredArray();
  expect(() => {
    squaredArray.getSquaredSortedArray([3, "b", "?", "."]);
  }).toThrow(new Error("invalid token found or forbidden characters."));
});
