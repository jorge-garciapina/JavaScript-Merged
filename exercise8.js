// Given an array of size N, move all zeroes contained in the array to the
// end while  preserving the relative order of all other elements.
// - Do not use a separate array
// - Do not use splice

// I decided to use the -sort- method in this method,
// the sorting order is defined by a comparison function
// that takes two elements of the array as parameters (a and b).
function moveZeros(arr) {
  arr.sort((a, b) => {
    // If -a- is 0, it returns 1, which means that it should be placed
    // after -b- in the sorted array.
    if (a === 0) {
      return 1;
    }
    // If -b- is 0, it returns -1, which means that it should be placed
    // before -a- in the sorted array.
    else if (b === 0) {
      return -1;
    }
    // If neither a nor b is 0, it returns 0, which means that their
    // relative order in the sorted array remains unchanged.
    return 0;
  });
  return arr;
  // After the sort, all zeros will be at the end of the array, while
  // preserving the relative order of all other elements.
}

console.log(moveZeros([2, 0, 4, 5, 0, 2, 0, 0, 3]));
