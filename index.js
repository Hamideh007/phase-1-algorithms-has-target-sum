function hasTargetSum(array, target) {
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // iterate through remaining elements
    for (let j = i + 1; j < array.length; j++) {
      // check if the sum of two elements is equal to the target
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  // if no two integers in array sum up to the target, return false
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
