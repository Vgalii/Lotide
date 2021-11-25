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
const assertEqual = function(actual, expected) {
  let errorMessage = "🛑🛑🛑 " + actual + "!==" + expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, errorMessage);
  }
};
// this function returns true if both objects have the same keys with the same values
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true);



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);