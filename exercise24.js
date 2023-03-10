function removeElements(inputArray, elementsToRemove) {
  for (let i = inputArray.length - 1; i >= 0; i--) {
    if (elementsToRemove.includes(inputArray[i])) {
      inputArray.splice(i, 1);
    }
  }
  return inputArray;
}

let modifiedArray = removeElements(
  ["cat", "dog", "turtle", 87, [1, 2, 3]],
  ["cat"]
);

console.log(modifiedArray);
