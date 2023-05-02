// Define an async object that contains the getAll method
const async = {
  // getAll method accepts an array of ajax calls (Promises) and a callback function
  getAll: async function (urlArray, callback) {
    // Initialize an object to store the results of the ajax calls
    const results = {};

    // Map the array of ajax calls to an array of promises
    // Each promise resolves with the data or rejects with an error
    const promises = urlArray.map((ajaxCall, index) =>
      ajaxCall()
        .then((data) => {
          // On successful resolution of the promise, store the result
          // as an object with 'status' and 'value' properties
          results[index + 1] = { status: "fulfilled", value: data };
        })
        .catch((error) => {
          // On rejection of the promise, store the error reason
          // as an object with 'status' and 'reason' properties
          results[index + 1] = { status: "rejected", reason: error };
        })
    );

    // Wait for all promises to either fulfill or reject
    // Promise.allSettled is used to ensure all promises are settled
    await Promise.allSettled(promises);
    // Call the callback function with the results object as its context
    callback.call(results);
  },
};

// Example usage:
// Define two example ajax calls as Promises
const axCall1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a possible error
      const error = Math.random() > 0.5;

      if (error) {
        reject("Error in first function");
      } else {
        resolve("Result of first function");
      }
    }, 1000);
  });
};

const axCall2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a possible error
      const error = Math.random() > 0.5;

      if (error) {
        reject("Error in second function");
      } else {
        resolve("Result of second function");
      }
    }, 500);
  });
};

// Define a callback function to handle the results of the ajax calls
const callback = function () {
  console.log("Context:", this);
};

// Call the getAll method with the array of ajax calls and the callback function
async.getAll([axCall1, axCall2], callback);
