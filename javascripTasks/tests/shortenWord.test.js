import ShortenWord from "../src/ShortenWord.js";

test("test that I can find the shortest word", () => {
  const shortestWord = new ShortenWord();
  expect(shortestWord.findShortestWord("hello Olukayode Asemudara")).toBe(
    "hello",
  );
});

test("test that I can find the shortest word for one letter words", () => {
  const shortestWord = new ShortenWord();
  expect(shortestWord.findShortestWord("I am batman")).toBe("I");
});

test("test for invalid words", () => {
  const shortestWord = new ShortenWord();
  expect(() => {
    shortestWord.findShortestWord(".. .. .");
  }).toThrow(
    new Error('Invalid token found: ".." contains forbidden characters.'),
  );
});
