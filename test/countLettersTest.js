const assert = require("chai").assert;
const countLetters = require ("../countLetters");

describe("#countLetters", () => {
  
  it("returns {l: 2, i: 1, t: 2, e: 1} when the string is little", () => {
    assert.deepEqual(countLetters("little"), {l: 2, i: 1, t: 2, e: 1});
  })
}) 