function zeroSumNumbers(nums) {
  // sort the input array in ascending order
  nums.sort((a, b) => a - b);
  let result = [];
  // loop through the array starting from the first index
  for (let i = 0; i < nums.length - 2; i++) {
    // check if the current element is greater than 0,
    // if it is, then there is no way the sum of the 3 elements can be 0
    // Because the array will contain only possitive numbers
    if (nums[i] > 0) {
      break;
    }
    // check if the current element is equal to the previous element,
    // if it is, then we've already considered this sum, so skip it
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // initialize two pointers, one starting from `i + 1` and
    // the other starting from the end of the array
    let j = i + 1;
    let k = nums.length - 1;
    // loop through the array until `j` is less than `k`
    while (j < k) {
      // calculate the sum of the current 3 elements

      let sum = nums[i] + nums[j] + nums[k];
      console.log(i, j, k, sum);
      // if the sum is 0, add it to the result array
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        // skip the duplicate values of `j`
        while (j < k && nums[j] === nums[j + 1]) j++;
        // skip the duplicate values of `k`
        while (j < k && nums[k] === nums[k - 1]) k--;
        // move both pointers
        j++;
        k--;
      } else if (sum < 0) {
        // if the sum is less than 0, move the `j` pointer to the right
        j++;
      } else {
        // if the sum is greater than 0, move the `k` pointer to the left
        k--;
      }
    }
  }
  // return the result array
  return result;
}

console.log(zeroSumNumbers([3, 2, 1, 0, -3, 2, 2, -2]));

// Output: (2, 1, -3), (3, 0, -3), …
