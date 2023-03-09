function moveZeros(arr) {
  let nextNonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap the current element with the next non-zero element
      let currentNonZeroElement = arr[i];
      arr[i] = arr[nextNonZeroIndex];
      arr[nextNonZeroIndex] = currentNonZeroElement;
      // Increment the index where the next non-zero element should be inserted
      nextNonZeroIndex++;
    }
  }
  return arr;
}

console.log(moveZeros([2, 0, 4, 5, 0, 2, 0, 0, 3]));
// Output: [2, 4, 5, 2, 3, 0, 0, 0, 0]
console.log(moveZeros([2, 0, 4, 5, 0, 2, 0, 0, 3]));
// Output: [2, 4, 5, 2, 3, 0, 0, 0, 0];
