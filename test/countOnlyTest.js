const assert = require("chai").assert;
const countOnly = require ("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 1 for Jason", () => {
    assert.equal(result['Jason'], 1)
  });
  it("returns 2 for Fang", () => {
    assert.equal(result['Fang'], 2)
  });
  
});