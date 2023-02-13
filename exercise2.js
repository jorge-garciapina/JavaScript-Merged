// Reverse a string in JavaScript (1 hours)
// Do not use split.reverse.join
// *Create an instance method for all strings that returns
// the reversed string:
//      "hello world".reverse(); // ldrow olleh
// **Create an instance method for all strings that returns
// the reversed string, but keeps the order of the words:
//   	"hello world".reverseWords(); // olleh ldrow

// One fast way to do this is by creating a prototype method
// that will be available to all strings. This can be done by defining
// a new method on the String.prototype object, all the strings
// will have access to it:
String.prototype.reverse = function () {
  // This object is defined here to simplify the operations

  let inputObject = {
    input: this,
    output: "",
  };
  while (inputObject.input.length >= 1) {
    // The last letter of the input will be added (by the right)
    // to the inputObject.output string.
    inputObject.output += inputObject.input[inputObject.input.length - 1];
    // That letter will be removed from the inputObject.input
    inputObject.input = inputObject.input.substring(
      0,
      inputObject.input.length - 1
    );
  }
  return inputObject.output;
};
// console.log("Hello world".reverse());

// To create the second string method, it is possible to reuse
// some ideas as well as the .reverse() method
// "hello world".reverseWords(); // olleh ldrow

String.prototype.reverseWords = function () {
  let inputObject = {
    input: this.split(" "),
    output: "",
  };

  for (word of inputObject.input) {
    inputObject.output += word.reverse() + " ";
  }
  return inputObject.output.substring(0, inputObject.output.length - 1);
};

console.log("Hello world".reverseWords());
