// Introduction to the LCG:
// A Linear Congruential Generator (LCG) is a type of pseudorandom number generator that generates a sequence of numbers
// based on a linear equation. The equation is of the form: Xn+1 = (a * Xn + c) mod m.
// 'Xn' is the current value in the sequence, 'a' is the multiplier, 'c' is the increment, and 'm' is the modulus.
// LCGs have certain properties and limitations, and the choice of parameters (a, c, and m) affects the quality of the generated sequence.

// Our LCG generator factory function.
function generateUniqueRandomNumbers(min, max) {
  let m = max - min + 1; // Calculate the modulus based on the given range.
  let a = 101; // Multiplier
  let c = 103; // Increment
  let seed = Math.floor(Math.random() * m); // Randomize the seed within the range.
  let count = 0; // Counter to keep track of the number of generated values.

  return function () {
    if (count < 2 * m) {
      // Check if the number of generated values is less than twice the modulus.
      seed = (a * seed + c) % m; // LCG formula to calculate the next value.
      let value = min + seed; // Map the value to the desired range.
      count++;
      return value; // Return the generated value.
    } else {
      return "Limit reached"; // Return the "Limit reached" message when the limit is reached.
    }
  };
}

const min = 5;
const max = 20;

const interval = generateUniqueRandomNumbers(min, max);

for (let i = min; i < max; i++) {
  console.log(interval()); // Print the generated numbers within the interval.
}
