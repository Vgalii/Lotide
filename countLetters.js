const assertEqual = function(actual, expected) {
  let errorMessage = "🛑🛑🛑 " + actual + "!==" + expected;
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, errorMessage);
  }
};
const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};


console.log(countLetters("this is my string"));
console.log(countLetters("little"));
console.log(countLetters("short string"));
let result = countLetters("short");
assertEqual(result.s, 1);
