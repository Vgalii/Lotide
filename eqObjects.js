const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2){
  const arrOne = Object.keys(object1); 
  const arrTwo = Object.keys(object2);
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (const element of arrOne) { 
    if (Array.isArray(object1[element]) || Array.isArray(object2[element])) { 
      return (eqArrays(object1[element], object2[element]));
    } else if (object1[element] !== object2[element]) { 
      return false;
    }
  }
  return true;
}

module.exports = eqObjects;