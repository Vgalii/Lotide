const assertEqual = function(actual, expected) {
  let errorMessage = "🛑🛑🛑 " + actual + "!==" + expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, errorMessage);
  }
};



module.exports = assertEqual;