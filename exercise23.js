function generateUniqueRandomNumbers(min, max, count) {
  if (count > max - min + 1) {
    throw new Error("Count is larger than the range of possible numbers.");
  }

  // Generate array with numbers [min, max]
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  // Shuffle array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Slice count numbers from the shuffled array
  return numbers.slice(0, count);
}

console.log(generateUniqueRandomNumbers(1, 100, 101));
