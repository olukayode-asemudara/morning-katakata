import AscendingSquaredArray from "../src/AscendingSquaredArray.js";

test("test I can sort and square the elements of an array", () => {
  const squaredArray = new AscendingSquaredArray();
  expect(squaredArray.getSquaredSortedArray([3, 5, 2, 1])).toBe([1, 4, 9, 25]);
});
