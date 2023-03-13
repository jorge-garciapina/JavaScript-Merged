// Create a function that returns a function that will return
// the power of X from a specified number.

function myPowerFn(n) {
  return (power) => {
    return Math.pow(n, power);
  };
}

let n = myPowerFn(3);
n(2); // output: 9  (3^2)

console.log(n(2));
