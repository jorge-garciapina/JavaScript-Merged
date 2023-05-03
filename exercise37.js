// Part 1:
String.prototype.exclamation = function () {
  // ES6 syntax: -let-
  let input = this;
  // ES6 syntax: Use of template Strings
  return `${input}!`;
};
console.log("hello".exclamation());
console.log("hello world".exclamation());

// Part 2:
function add(...args) {
  if (args.length === 0) {
    throw new Error("No arguments provided");
  }

  return args.reduce((a, b) => a + b, 0);
}

try {
  console.log(add());
} catch (error) {
  console.error(error.message);
}

console.log(add(2, 5));
console.log(add(7, 11));
console.log(add(12, 8, 5, 6));
console.log(add());
