// Create a simple function to tell whether 2 is
// passed as a parameter or not.
function twoChecker(...args) {
  if (args.indexOf(2) === -1) {
    return "2 was not given";
  } else {
    return "2 was passed as a parameter";
  }
}

console.log(twoChecker(3, 4, 5, 2));
