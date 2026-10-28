class ShortenWord {
  findShortestWord(sentence) {
    const words = sentence.split(" ");
    let shortestWord = words[0];

    for (const word of words) {
      if (word.length < shortestWord.length) shortestWord = word;
    }

    console.log(shortestWord);
    return shortestWord;
  }
}

export default ShortenWord;
