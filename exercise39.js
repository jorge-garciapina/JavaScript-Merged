function isConsecutive(input) {
  // Part 1:
  // Check if the input matches any of the banned strings:
  if (input === "1234" || input === "qwert" || input === "asdf") {
    return false;
  }

  // Part 2:
  // Looking for 4 or more consecutive characters on the keyboard:
  // Characters in keyboard's order:
  let keyboard = ["1234567890", "qwertyuiop", "asdfghjkl", "zxcvbnm"];

  // Convert keyboard to a flat string for easier searching
  keyboard = keyboard.join("");

  // Check if each character and the next 3 characters are
  // in the keyboard string
  for (let i = 0; i < input.length - 3; i++) {
    let testString = input.substr(i, 4);
    if (keyboard.indexOf(testString) !== -1) {
      return false;
    }
  }

  return true;
}

console.log(isConsecutive("assdf8gh7"));
