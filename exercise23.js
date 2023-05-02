function generateUniqueRandom(min, max) {
  // A Set is used to store the generated numbers.
  // This ensures that each number is unique as duplicates are not allowed in a Set.
  let generatedNumbers = new Set();

  // The function returns another function that generates the unique random numbers.
  return function () {
    // Check if all numbers within the range have been generated.
    // If so, throw an error to prevent generating numbers outside the range.
    if (generatedNumbers.size >= max - min + 1) {
      throw new Error("All numbers in the range have been generated");
    }

    // Generate a random number within the range.
    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    // If the generated number is already in the Set, generate a new one.
    // This loop continues until a unique number is found.
    while (generatedNumbers.has(num)) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Add the unique number to the Set and return it.
    generatedNumbers.add(num);
    return num;
  };
}

let random = generateUniqueRandom(1, 10);
console.log("Example1", random());
console.log("Example2", random());
console.log("Example3", random());
console.log("Example4", random());
console.log("Example5", random());
console.log("Example6", random());
console.log("Example7", random());
console.log("Example8", random());
console.log("Example9", random());
console.log("Example10", random());
console.log("Example11: Error", random());
