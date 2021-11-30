const assert = require("chai").assert;
const without = require ("../without");


describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("returns ['hello', 'world] for words ['lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ['hello', 'world']);
  });
  it("returns [2, 3, 4] for words [1]", () => {
    assert.deepEqual(without([1, 2, 3, 4], [1]), [2, 3, 4]);
  })
})