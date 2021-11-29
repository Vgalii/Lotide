const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 3)