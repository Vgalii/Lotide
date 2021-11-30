const assert = require("chai").assert;
const letterPositions = require ("../letterPositions");

describe("#letterPosition", () => {
  it("returns [0] for letter h from 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  })
  it("returns [1] for letter e from 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  })
})