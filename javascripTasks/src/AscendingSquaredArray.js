class AscendingSquaredArray {
  getSquaredSortedArray(array) {
    newArray = [];
    let count = 0;

    for (const number of array) {
      newArray[count] = number * number;
      count++;
    }

    console.log(newArray.sort());
    return newArray.sort();
  }
}

export default AscendingSquaredArray;
