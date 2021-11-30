const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let check = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        check = true;
      }
    } if (check === false) {
      result.push(source[i]);
    }
  } return result;
};
module.exports = without;


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
