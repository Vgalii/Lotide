const assertEqual = function(actual, expected) {
  let errorMessage = "🛑🛑🛑 " + actual + "!==" + expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, errorMessage);
  }
};
const tail = function(arr) {
  return arr.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));