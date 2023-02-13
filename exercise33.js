// Explain the difference, if any, between the following two
// functions. Will the returned value be the same if compared?

function func1() {
  return { prop: "foo" };
}
function func2() {
  return { prop: "foo" };
}

// To understand this, first let's create two objects:

let obj1 = func1();
let obj2 = func2();

// Both objects have the same property, it is possible to see
// this by making the following comparison:
console.log("Property comparison: ", obj1.prop === obj2.prop);

// However, if we compare the two objects:
console.log("Referential equality: ", obj1 === obj2);
// The operation obj1 === obj2 gives a -false- value because
// it is making a "Referential equality" and -obj1-, -obj2-
// point to different reference.
