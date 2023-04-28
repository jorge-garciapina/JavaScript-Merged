function matchString(pattern, string) {
  // Get the lengths of pattern and string
  const patternLen = pattern.length;
  const stringLen = string.length;

  // If pattern or string are empty, return null
  if (patternLen === 0 || stringLen === 0) {
    return null;
  }

  // Iterate through the string, considering each substring of length
  // equal to the pattern
  for (
    let indexInString = 0;
    indexInString <= stringLen - patternLen;
    indexInString++
  ) {
    // Assume there is a match until proven otherwise
    let match = true;

    // Iterate through each character in the pattern
    for (
      let indexInPattern = 0;
      indexInPattern < patternLen;
      indexInPattern++
    ) {
      // If the pattern character is not a wildcard and doesn't match the
      // corresponding character in the string, set match to false and
      // break the inner loop
      if (
        pattern[indexInPattern] !== "*" &&
        pattern[indexInPattern] !== string[indexInString + indexInPattern]
      ) {
        match = false;
        break;
      }
    }

    // If the loop has finished and match is still true, return the matching substring
    if (match) {
      return string.substr(indexInString, patternLen);
    }
  }

  // If no match is found, return null
  return null;
}

console.log("1: ", matchString("*y", "rxy")); // Output: "xy"
console.log("2: ", matchString("xy", "xxy")); // Output: "xy"
console.log("3: ", matchString("xy", "xyz")); // Output: "xy"
console.log("4: ", matchString("hel*o", "hello")); // Output: "hello"
console.log("5: ", matchString("hel*o", "helo")); // Output: null
console.log("6: ", matchString("*abc", "abc")); // Output: null
console.log("7: ", matchString("*abc", "xabc")); // Output: "xabc"
console.log("8: ", matchString("a*b*c", "abc")); // Output: null
console.log("9: ", matchString("a*b*c", "axbrc")); // Output: "axbrc"
console.log("10: ", matchString("*", "hello world")); // Output: "h"
console.log("11: ", matchString("l*o", "hello world")); // Output: "llo"
console.log("12 ", matchString("*h", "h")); // Output: null
