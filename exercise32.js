// Explain the output of the following code:
// The output of this function can be understood by looking
// at the different scopes created inside -myLog- function.

// 1) A closure is created in line 24. An object is returned.
//    (with 2 properties and 1 method).

function myLog() {
  return {
    bar: "bar",
    foo: "foo",
    prop: function () {
      // 2) -this- refers to the object itself
      // 3) -self- is a variable with -prop- scope
      //    which means that functions inside -prop-
      //    can access -self-
      let self = this;
      // 4) Because of line 17, -self- and -this-
      //    are equal, which means that both share
      //    the -bar- and -foo- properties
      console.log(self.bar);
      console.log(this.foo);

      (function () {
        // 5) Inside this IIFE it is importan to remember question 11
        //    of the JavaScript Merged set: "Inside a standalone function,
        //    -this- refers to the global object."
        // -self.bar- returns "bar" because it is accessing self from the
        // outer scope.
        // -this.foo- returns an error because -this- is the global object
        // which does not have a foo property
        console.log(self.bar);
        console.log(this.foo);
      })();
    },
  };
}

let obj = myLog();
obj.prop();
obj.rrr;
