
// const assertEqual = require("../assertEqual");


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("returns true  for [1, 2, 3, 4], [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true)
  });
  it("returns false  for [1, 2, 3, 4], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false)
  });
  it("returns false  for [1, 2, 3, 4], [1, 2, 3, [4]]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, [4]]), false)
  });
} )