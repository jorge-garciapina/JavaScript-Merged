function matchString(pattern, string) {
  const patternLen = pattern.length;
  const stringLen = string.length;

  let output;
  let oneIsEmpty = patternLen === 0 || stringLen === 0;
  let patternIsBigger = patternLen > stringLen;

  // If pattern and string are empty, no match
  if (oneIsEmpty) {
    return null;
  } else if (patternIsBigger) {
    return null;
  }
  let indexInString = 0;
  while (indexInString <= stringLen) {
    let currentMatchesFirstInPattern = string[indexInString] === pattern[0];
    let patterStartsWithWildcar = pattern[0] === "*";
    if (currentMatchesFirstInPattern || patterStartsWithWildcar) {
      let indexInPattern = 0;
      output = "";
      while (indexInPattern <= patternLen) {
        let consecutivesDontMatch =
          pattern[indexInPattern] !== string[indexInString];
        let letterInPatternIsNotWildcard = pattern[indexInPattern] !== "*";

        if (consecutivesDontMatch && letterInPatternIsNotWildcard) {
          break;
        }
        output += string[indexInString];
        // console.log("aqui", pattern[indexInPattern], output);
        if (output.length === patternLen) {
          return output;
        }

        indexInPattern++;
        indexInString++;
      }
    }
    // console.log("Current: ", string[indexInString]);
    // console.log("output: ", output);
    indexInString++;
  }
}

let pattern1 = "hel*o";
let string1 = "hello";
let string2 = "helo";

console.log("1: ", matchString(pattern1, string1)); // Output: hello
console.log("2: ", matchString(pattern1, string2)); // Output: null

let pattern2 = "*abc";
let string3 = "abc";
let string4 = "xabc";

console.log("3: ", matchString(pattern2, string3)); // Output: null
console.log("4: ", matchString(pattern2, string4)); // Output: xabc

let pattern3 = "a*b*c";
let string5 = "abc";
let string6 = "axbrc";

console.log("5: ", matchString(pattern3, string5)); // Output: null
console.log("6: ", matchString(pattern3, string6)); // Output: axbrc

let pattern5 = "*";
let string9 = "hello world";
console.log("7: ", matchString(pattern5, string9)); // Output: h

let pattern6 = "l*o";
let string10 = "hello world";
console.log("8: ", matchString(pattern6, string10)); // Output: llo

let pattern7 = "*h";
let string11 = "h";
console.log("9: ", matchString(pattern7, string11)); // Output: null
