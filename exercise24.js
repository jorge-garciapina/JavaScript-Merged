// Create a function that will remove specific elements from an array.  (1 hours)
function removeElements(inputArray, elementsToRemove) {
  let output = [];
  for (let removeItem of elementsToRemove) {
    for (let element of inputArray) {
      if (removeItem !== element) {
        output.push(element);
      }
    }
  }

  return output;

  //   console.log(inputArray);
}

let modifiedArray = removeElements(
  ["cat", "dog", "turtle", 87, [1, 2, 3]],
  ["cat"]
);

console.log(modifiedArray);
