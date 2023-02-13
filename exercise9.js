// Implement a recursive function to calculate a specified member of the
// Fibonacci series.
//    -Optimize the implementation through the use of a cache (memoization)

// To implement the memoization I used a closure:
function fibonacciGenerator() {
  let cache = {};
  function fibonacci(N) {
    // Stopping condition 1:
    if (N === 0) {
      return 0;
    }
    // Stopping condition 2:
    else if (N === 1) {
      return 1;
    }

    // Using memoization to avoid recalculations:
    if (cache[N]) {
      return cache[N];
    }

    // Fibonacci member
    cache[N] = fibonacci(N - 2) + fibonacci(N - 1);
    return cache[N];
  }

  return fibonacci;
}

// Creation of the -clusure-
const fibonacciMember = fibonacciGenerator();
console.log(fibonacciMember(8));
console.log(fibonacciMember(8));
console.log(fibonacciMember(1000));
