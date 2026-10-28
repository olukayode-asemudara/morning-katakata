class ShortenWord {
  findShortestWord(sentence) {
    const words = sentence.split(" ");
    let shortestWord = words[0];
    let regexChecker = /[0-9][a-zA-Z]+/;

    for (const word of words) {
      if (word.length < shortestWord.length) shortestWord = word;
      if (regexChecker.test(shortestWord))
        throw new Error(
          `Invalid token found: "${word}" contains forbidden characters.`,
        );
    }

    console.log(shortestWord);
    return shortestWord;
  }
}

export default ShortenWord;
