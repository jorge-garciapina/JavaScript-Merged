  // Characters in keyboard's order (both lowercase and uppercase):
  let keyboard = [
    "1234567890",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM",
  ];

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
console.log("1: ", isValidInput("qwert")); // returns false
console.log("2: ", isValidInput("1234")); // returns false
console.log("3: ", isValidInput("rewqmkrp")); // returns false
console.log("4: ", isValidInput("4321")); // returns false
console.log("5: ", isValidInput("7895")); // returns true
console.log("6: ", isValidInput("abacyuio")); // returns false
console.log("7: ", isValidInput("assdf8gh7")); // returns true
console.log("8: ", isValidInput("fdsa1")); // returns false
console.log("9: ", isValidInput("asdfg1234")); // returns false
console.log("10: ", isValidInput("hello")); // returns true
console.log("11: ", isValidInput("ASDF")); // returns true
