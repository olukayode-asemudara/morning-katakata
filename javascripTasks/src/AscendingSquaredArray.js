class AscendingSquaredArray {
  getSquaredSortedArray(array) {
    newArray = [];
    let count = 0;
    let regexChecker = /[0-9]|[^a-zA-Z]+/;

    for (const number of array) {
      if (regexChecker.test(array)) {
        throw new Error(`invalid token found or forbidden characters.`);
      }
      newArray[count] = number * number;
      count++;
    }

    console.log(newArray.sort());
    return newArray.sort();
  }
}

export default AscendingSquaredArray;
