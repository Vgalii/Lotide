const assertEqual = function(actual, expected) {
  let errorMessage = "🛑🛑🛑 " + actual + "!==" + expected;
  let messageCorr = "Assertion Passed: ✅✅✅ " + actual + "===" + expected;
  if (actual === expected) {
    console.log(messageCorr);
  } else {
    console.assert(actual === expected, errorMessage);
  }
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("My string", "My string");