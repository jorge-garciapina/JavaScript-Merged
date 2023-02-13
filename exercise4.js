// To solve this problem I used recursion.
function flatArray(array) {
  let output = [];
  // This for iterates over the items of the array
  for (let item of array) {
    // There are 2 options:
    // 1) The item is an array:
    if (Array.isArray(item)) {
      output = output.concat(flatArray(item));
    }
    // 2) The item is not an array
    else {
      output.push(item);
    }
  }
  return output;
}

console.log(flatArray([1, 2, 3, [4, 5, [6, 7]], 8, 9]));
