// Using a "Generator Function"

function* uniqueRandomIntGenerator(min, max) {
  const rangeSize = max - min + 1;

  if (rangeSize <= 0) {
    throw new Error("Invalid range: max must be greater than min");
  }

  const availableNumbers = Array.from(
    { length: rangeSize },
    (_, index) => index + min
  );

  while (availableNumbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const randomNumber = availableNumbers.splice(randomIndex, 1)[0];
    yield randomNumber;
  }
}

// Example usage:
const min = 1;
const max = 10;
const generator = uniqueRandomIntGenerator(min, max);

for (let i = 0; i < max - min + 1; i++) {
  console.log(generator.next().value);
}
