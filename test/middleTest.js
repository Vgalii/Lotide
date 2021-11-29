
// const assertArraysEqual = require("../assertArraysEqual");

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

const assert = require("chai").assert;
const middle = require ("../middle");

describe("#middle", () => {
  it("returns [3, 4] for an [1, 2, 3, 4, 5, 6]) array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [3] for an [1, 2, 3, 4, 5]) array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [] for an [1, 2]) array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [] for an [1]) array", () => {
    assert.deepEqual(middle([1]), []);
  });
})