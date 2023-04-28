// // Reverse a string in JavaScript (1 hours)
// // Do not use split.reverse.join
// // *Create an instance method for all strings that returns
// // the reversed string:
// //      "hello world".reverse(); // ldrow olleh
// // **Create an instance method for all strings that returns
// // the reversed string, but keeps the order of the words:
// //   	"hello world".reverseWords(); // olleh ldrow

// // One fast way to do this is by creating a prototype method
// // that will be available to all strings. This can be done by defining
// // a new method on the String.prototype object, all the strings
// // will have access to it:

// Define the `reverse` method for all string instances
String.prototype.reverse = function () {
  let output = "";
  // Iterate over the characters of the original string in reverse order
  for (let i = this.length - 1; i >= 0; i--) {
    // Append each character to the `output` string
    output += this[i];
  }
  // Return the reversed string
  return output;
};

// Define the `reverseWords` method for all string instances
String.prototype.reverseWords = function () {
  // Split the original string into words
  let words = this.split(" ");
  let output = "";
  // Iterate over the words
  for (let i = 0; i < words.length; i++) {
    // Reverse each word using the `reverse()` method and append it to the `output` string
    output += words[i].reverse();
    // Add a space if not at the last word
    if (i < words.length - 1) {
      output += " ";
    }
  }
  // Return the reversed words string
  return output;
};

// Test the `reverse` and `reverseWords` methods
console.log("hello world".reverse()); // "dlrow olleh"
console.log("hello world".reverseWords()); // "world hello"
