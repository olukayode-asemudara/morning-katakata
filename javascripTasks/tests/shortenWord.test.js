import ShortenWord from "../src/ShortenWord.js";

test("test that I can find the shortest word", () => {
  const shortestWord = new ShortenWord();
  expect(shortestWord.findShortestWord("hello Olukayode Asemudara")).toBe(
    "hello",
  );
});
