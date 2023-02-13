// Explain the result of the following operations

// ------- Expression 1 -------
console.log([] + []);
// RESULT: ""
// EXPLANATION:
// The expression [] + [] evaluates to an empty string,
// because both operands are empty arrays and arrays
// are converted to strings by joining their elements.
// Since both arrays are empty, the result is an empty string.

// ------- Expression 2 -------
console.log({} + []);
// RESULT: [object Object]
// The expression {} + [] evaluates to [object Object],
// because when the + operator encounters an object operand,
// it first calls the toString method on the object. The toString
// method of an object returns the string [object Object], which
// is then concatenated with an empty array.

// ------- Expression 3 -------
console.log([] + {});
// RESULT: [object Object]
// EXPLANATION:
// The expression [] + {} evaluates to [object Object] for the
// same reason as {} + [].

// ------- Expression 4 -------
console.log({} + {});
// RESULT: [object Object][object Object]
// EXPLANATION:
// The expression {} + {} evaluates to [object Object][object Object],
// because both operands are objects and they are converted to strings
// as described above. The result is the concatenation of the two
// strings [object Object].
