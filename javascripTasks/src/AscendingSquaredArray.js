class AscendingSquaredArray {
  getSquaredSortedArray(array) {
    newArray = [];
    let count = 0;
    let regexChecker = /[^0-9]/;

    for (const number of array) {
      if (regexChecker.test(number)) {
        throw new Error(`Invalid token found or forbidden characters.`);
      }

      newArray[count] = number * number;
      count++;
    }

    console.log(newArray.sort());
    return newArray.sort((a, b) => a - b);
  }
}

export default AscendingSquaredArray;
