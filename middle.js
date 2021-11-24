const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  } return true;
};
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${arr1} !== ${arr2}`);
  }
};

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["3", "5", 8], ["1", 2, 3]);

const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  if (array.length % 2 === 1) {
    result.push(array[Math.floor(array.length / 2)]);
  } else {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[(array.length / 2)]);
  }
      
  return result;
};

// console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4]);