function matchString(pattern, string) {
  let patternIndex = 0; // Keeps track of the current index in the pattern string
  let stringIndex = 0; // Keeps track of the current index in the input string

  // Loop through both the pattern and input string
  while (patternIndex < pattern.length && stringIndex < string.length) {
    let patternChar = pattern[patternIndex]; // Get the current character in the pattern
    let stringChar = string[stringIndex]; // Get the current character in the input string

    if (patternChar === "*") {
      // Check if the current character in the pattern is a wildcard
      // If the current character in the pattern is a wildcard, skip it and move on to the next character in the pattern
      patternIndex++;

      // Check if the next character in the pattern is a wildcard or not
      if (pattern[patternIndex] === "*") {
        // If the next character in the pattern is also a wildcard, move the patternIndex to the next character and continue
        patternIndex++;
        continue;
      }

      // Find the next occurrence of the character after the wildcard in the input string
      let nextCharIndex = string.indexOf(pattern[patternIndex], stringIndex);

      // If the next occurrence of the character is not found, return false
      if (nextCharIndex === -1) {
        return false;
      }

      // Set the stringIndex to the next occurrence of the character in the input string
      stringIndex = nextCharIndex;
    } else if (patternChar === stringChar) {
      // If the current characters in both the pattern and input string matchString
      // Move both the patternIndex and stringIndex to the next character
      patternIndex++;
      stringIndex++;
    } else {
      // If the current characters do not matchString, return false
      return false;
    }
  }

  // Return true if all characters in both the pattern and input string have been matched
  return patternIndex === pattern.length && stringIndex === string.length;
}

let pattern1 = "hel*o";
let string1 = "hello";
let string2 = "helo";

console.log(matchString(pattern1, string1)); // Output: true
console.log(matchString(pattern1, string2)); // Output: false

let pattern2 = "*abc";
let string3 = "abc";
let string4 = "xabc";

console.log(matchString(pattern2, string3)); // Output: true
console.log(matchString(pattern2, string4)); // Output: true

let pattern3 = "a*b*c";
let string5 = "abc";
let string6 = "axbxc";

console.log(matchString(pattern3, string5)); // Output: true
console.log(matchString(pattern3, string6)); // Output: true

let pattern4 = "a*b*c*";
let string7 = "abc";
let string8 = "axbxc";

console.log(matchString(pattern4, string7)); // Output: false
console.log(matchString(pattern4, string8)); // Output: false
