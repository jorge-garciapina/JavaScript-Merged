let async = {
  getAll: function (urlArray, callback) {
    // Store the results of the AJAX calls in an object
    let results = {};

    // Create an array of Promises for each AJAX call
    let promises = urlArray.map((url, index) => {
      return new Promise((resolve, reject) => {
        // Make the AJAX call using the provided URL
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Add the result of the AJAX call to the results object
            results[index + 1] = xhr.responseText;
            resolve();
          }
        };
        xhr.send();
      });
    });

    // Wait for all Promises to complete
    Promise.all(promises)
      .then(() => {
        // Call the callback function with the results object as the context
        callback.call(results);
      })
      .catch((error) => {
        // Handle any errors that occur during the AJAX calls
        console.error(error);
      });
  },
};

// To use this function:
async.getAll([axCall1, axCall2], function () {
  console.log(this); // This will log the results object, which will contain the results of the AJAX calls
});
