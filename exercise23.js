function randomIntNoDuplicates(min, max) {
  // -------------- Start: Input validation --------------
  // Check if min and max are both numbers
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both min and max must be numbers");
  }
  // Check if min is less than max
  if (min >= max) {
    throw new Error("Min must be less than max");
  }
  // --------------  End: Input validation  --------------

  // -------------- Start: Main functionallity  --------------
  // Set that will store the values of the numbers in the
  // range of (min, max)
  let remainingNumbers = new Set(
    Array.from({ length: max - min + 1 }, (_, i) => min + i)
  );

  return function () {
    if (!remainingNumbers.size) {
      throw new Error("All numbers have been generated.");
    }
    // Now the code generates a random index between 0 and the
    // size of -remainingNumbers-
    const randomIndex = Math.floor(Math.random() * remainingNumbers.size);
    // Now the code extracts a value from -remainingNumbers-
    const randomNumber = [...remainingNumbers][randomIndex];
    // The code uses the .delete() method of the Set to delete
    // the obtained number.
    remainingNumbers.delete(randomNumber);
    return randomNumber;
  };
  // --------------  End: Main functionallity  --------------
}

const generate = randomIntNoDuplicates(1, 10);
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
