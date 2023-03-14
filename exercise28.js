const async = {
  getAll: async function (urlArray, callback) {
    const results = {};

    try {
      const promises = urlArray.map((ajaxCall, index) => {
        return ajaxCall().then((data) => {
          results[index + 1] = data;
        });
      });

      await Promise.all(promises);
      callback.call(results);
    } catch (error) {
      console.error("Error:", error);
    }
  },
};

// Example usage:
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
const callback = function () {
  console.log("Context:", this);
};

async.getAll([axCall1, axCall2], callback);
