const assertEqual = function(actual, expected) {
  let errorMessage = "🛑🛑🛑 " + actual + "!==" + expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, errorMessage);
  }
};

const head = function(arr) {
  return arr[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");