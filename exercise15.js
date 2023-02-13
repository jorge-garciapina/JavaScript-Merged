// Given the following code snippet of a module, create two public
// methods and 1 private method:
//    var foo = (function () { /* … */ })();
//    foo.bar();
//    foo.test();

var foo = (function () {
  function privateMethod() {
    return " method";
  }
  return {
    bar: () => {
      console.log("-bar-" + privateMethod());
    },
    test: () => {
      console.log("-test-" + privateMethod());
    },
  };
})();
foo.bar();
foo.test();
