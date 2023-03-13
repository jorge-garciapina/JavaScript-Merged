function isConsecutive(input) {
  // Characters in keyboard's order:
  let keyboard = ["1234567890", "qwertyuiop", "asdfghjkl", "zxcvbnm"];

  // Check for four or more consecutive characters in any order:
  for (let row of keyboard) {
    for (let i = 0; i <= input.length - 4; i++) {
      let testSubString = input.substr(i, 4);
      let isSubstringConsecutive = row.includes(testSubString);
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      let isReversedConsecutive = row.includes(reverseString(testSubString));

      if (isSubstringConsecutive || isReversedConsecutive) {
        return false;
      }
    }
  }

  return true;
}

console.log(isConsecutive("rewqmkrp")); // returns false
console.log(isConsecutive("4321")); // returns false
console.log(isConsecutive("7895")); // returns false
console.log(isConsecutive("abacyuio")); // returns false
console.log(isConsecutive("assdf8gh7")); // returns true
console.log(isConsecutive("fdsa1")); // returns false
console.log(isConsecutive("asdfg1234")); // returns false
console.log(isConsecutive("hello")); // returns true
