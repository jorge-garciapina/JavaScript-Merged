// Given the following input values, how will the code snipped behave? (30 mins)

// function log(v){
//   if(v){ console.log('ok');}
//   else{ console.log('no'); }
// }

function logFunction(v) {
  if (v) {
    console.log("ok");
  } else {
    console.log("no");
  }
}
// As in exercise 21, to answer this part it is possible to use
// what it was studied in question 60 of the
// JavaScript Merged questionary, in that part
// we learned that:
// "In practice, all the values that exist in
// JavaScript can be converted to boolean values"
// In practice, all the objects that exist in
// JavaScript (including arrays and functions)
// are -true-
logFunction(false); // no
logFunction(true); // ok
logFunction(false); // no
logFunction({}); // ok
logFunction([]); // ok
logFunction(NaN); // no
logFunction(0); // no
logFunction(1); // ok
logFunction(undefined); // no
logFunction(null); // no
