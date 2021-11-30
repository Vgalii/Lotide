
const findKeyByValue = function(obj, value) {
 
  const newArr = Object.keys(obj);
  for (let element of newArr){
    if (value === obj[element]) {
      return element;
    }
  }
};
module.exports = findKeyByValue;
