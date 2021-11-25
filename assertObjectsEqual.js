const eqObjects = function(object1, object2){
  const arrOne = Object.keys(object1); //transforming object keys to array
  const arrTwo = Object.keys(object2);
  if (arrOne.length !== arrTwo.length) { // if the length doesn't match => false
    return false;
  }
  for (const element of arrOne) { //iterating through array of keys
    if (Array.isArray(object1[element]) || Array.isArray(object2[element])) { // checking if the values are arrays, use eqArrays function
      return (eqArrays(object1[element], object2[element]));
    } else if (object1[element] !== object2[element]) { // if values are not arrays, they are primitives, and we can compare them
      return false;
    }
  }
  return true;
}
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({a: "1", b: "2"}, {a: "1", b: "2"});