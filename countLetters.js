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

module.exports = countLetters;

// console.log(countLetters("this is my string"));
// console.log(countLetters("little"));
// console.log(countLetters("short string"));

