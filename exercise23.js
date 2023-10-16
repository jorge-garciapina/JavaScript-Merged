// Function to compute the greatest common divisor of two numbers.
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
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

// Function to compute 'a' for the LCG, adjusted to Hull-Dobell Theorem.
function computeA(m) {
  // Prime factor 4 is included only if m is a multiple of 4
  const factors = m % 4 === 0 ? [4] : [];

  // Include all prime factors of m
  let num = m;
  for (let i = 2; i <= Math.sqrt(m); i++) {
    while (num % i === 0) {
      if (isPrime(i)) factors.push(i);
      num /= i;
    }
  }

  if (num > 1) factors.push(num); // Remaining large prime factor

  // Compute a according to Hull-Dobell
  const a = factors.reduce((acc, val) => acc * val, 1) + 1;

  return a;
}

// Function to generate unique random numbers within a range.
function* generateUniqueRandomNumbers(min, max) {
  const m = max - min + 1;

  // Compute 'a' using Hull-Dobell Theorem
  const a = computeA(m);

  let b = 1;
  let seed = Math.floor(Math.random() * m); // Random starting seed
  let count = 0;

  while (count < m) {
    // Generating m unique numbers
    seed = (a * seed + b) % m;
    const value = min + seed;
    count++;
    yield value;
  }
}

const min = 8;
const max = 11;

const interval = generateUniqueRandomNumbers(min, max);

for (let i = min; i <= max; i++) {
  console.log(`${i}: `, interval.next().value); // Print the generated numbers within the interval.
}
