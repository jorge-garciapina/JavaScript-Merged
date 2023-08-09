// Introduction to the LCG:
// A Linear Congruential Generator (LCG) is a type of pseudorandom number generator that generates a sequence of numbers
// based on a linear equation. The equation is of the form: Xn+1 = (a * Xn + c) mod m.
// 'Xn' is the current value in the sequence, 'a' is the multiplier, 'c' is the increment, and 'm' is the modulus.
// LCGs have certain properties and limitations, and the choice of parameters (a, c, and m) affects the quality of the generated sequence.

// I have selected new values for m, a abd c
// Our LCG generator factory function.
function generateUniqueRandomNumbers(min, max) {
  let m = 2 ** 32; // We'll use a big modulus to make use of good LCG parameters.
  let a = 1664525;
  let c = 1013904223;

  let range = max - min + 1;
  let seed = Math.floor(Math.random() * m);

  let generated = new Set(); // Store already generated numbers within range.

  return function () {
    let value;
    do {
      seed = (a * seed + c) % m;
      value = min + (seed % range); // Map the value to the desired range.
    } while (generated.has(value));

    generated.add(value); // Remember the generated value.

    if (generated.size >= range + 1) {
      return "Limit reached";
    }

    return value;
  };
}

const min = 1;
const max = 20;
const interval = generateUniqueRandomNumbers(min, max);
for (let i = min; i < max; i++) {
  console.log(`i = ${i}`, interval());
}
