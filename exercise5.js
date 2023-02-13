// Implement the following functionality for a duplicate() method:
// [1,2,3,4].duplicate(); // output: [1,2,3,4,1,2,3,4]
Array.prototype.duplicate = function () {
  // In this context, the -this- keyword refers to the array
  // object that the duplicate method is being called on.
  // The duplicate method extends the built-in Array prototype,
  // so it becomes a method that can be called on any array.
  return this.concat(this);
};

console.log([1, 2, 3, 4].duplicate());
