import AscendingSquaredArray from "../src/AscendingSquaredArray.js";

test("test I can sort and square the elements of an array", () => {
  const squaredArray = new AscendingSquaredArray();
  expect(squaredArray.getSquaredSortedArray([3, 5, 2, 1])).toEqual([
    1, 4, 9, 25,
  ]);
});

test("test I pass invalid arguments into an array", () => {
  const squaredArray = new AscendingSquaredArray();
  const invalidArgs = ["b", "?", "."];
  expect(() => {
    squaredArray.getSquaredSortedArray(invalidArgs);
  }).toThrow("Invalid token found or forbidden characters.");
});
