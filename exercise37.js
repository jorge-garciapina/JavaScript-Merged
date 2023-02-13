// While using as much ES6 syntax as  possible, write functions
// that will do the following:
// Part 1:
String.prototype.exclamation = function () {
  // ES6 syntax: -let-
  let input = this;
  // ES6 syntax: Use of emplate Strings
  return `${input}!`;
};
console.log("hello".exclamation());
console.log("hello world".exclamation());

// Part 2:
function add(...args) {
  // ES6 syntax: Arrow function
  return args.reduce((a, b) => {
    return a + b;
  });
}

console.log(add(2, 5));
console.log(add(7, 11));
console.log(add(12, 8, 5, 6));
