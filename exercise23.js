// Introduction to the LCG:
// A Linear Congruential Generator (LCG) is a type of pseudorandom number generator that generates a sequence of numbers
// based on a linear equation. The equation is of the form: Xn+1 = (a * Xn + b) mod m.
// 'Xn' is the current value in the sequence, 'a' is the multiplier, 'b' is the increment, and 'm' is the modulus.
// LCGs have certain properties and limitations, and the choice of parameters (a, b, and m) affects the quality of the generated sequence.

// Function to compute the greatest common divisor of two numbers.
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Function to find all multiples of a number.
function findMultiples(num) {
  var multiples = [];
  for (var i = Math.floor(num / 2); i >= 1; i--) {
    if (num % i === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

// Function to check if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Function to find all prime multiples of a number.
function findPrimeMultiples(num) {
  var multiples = findMultiples(num);

  var primeMultiples = multiples.filter((number) => {
    return isPrime(number);
  });
  return primeMultiples;
}

// Function to compute the value of 'a' for the LCG.
function computeA(m) {
  const primeMultiples = findPrimeMultiples(m);
  let a = primeMultiples.reduce((a, b) => {
    return a * b;
  }, 1);
  if (m % 4 === 0) {
    a = a * 4;
  }
  return a + 1;
}

// Function to generate unique random numbers within a range.
function* generateUniqueRandomNumbers(min, max) {
  let m = max - min + 1;

  // Check if 'b' and 'm' are coprime.
  if (gcd(1, m) !== 1) {
    return "b and m are not coprime";
  }

  let a = computeA(m);

  let b = 1;
  let seed = Math.floor(Math.random() * m);
  let count = 0;

  while (count < 2 * m) {
    seed = (a * seed + b) % m;
    let value = min + seed;
    count++;
    yield value;
  }
}

const min = 1;
const max = 8;

const interval = generateUniqueRandomNumbers(min, max);

for (let i = min; i <= max; i++) {
  console.log(`${i}: `, interval.next().value); // Print the generated numbers within the interval.
}


