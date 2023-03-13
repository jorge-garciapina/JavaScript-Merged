// Explain the following code:

// There are 2 function definitions:
// -foo1- and -foo2-
// There is a function expressions named both -fn-
// neverthless none of the -fn- fuction expressions is executed.
// The result of the expressions:
// console.log(foo1())
// console.log(foo2())
// is the return statement of the functions (-foo1- -foo2-)

function foo1() {
  let fn = function () {
    console.log(this.foo);
  };
  return { foo: "bar" };
}

function foo2() {
  let fn = function () {
    console.log(this.foo);
  };
  return { foo: "baz" };
}

console.log(foo1());
console.log(foo2());
