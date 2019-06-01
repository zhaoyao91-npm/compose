const tap = require("tap");

const composeTest = require("./compose");

const buildFn = n => str => str + n;
const funcs = [buildFn("a"), buildFn("b"), buildFn("c")];

tap.test("compose spread funcs", t => {
  const result = composeTest(...funcs)("hi");
  t.equal(result, "hicba");
  t.done();
});

tap.test("compose array funcs", t => {
  const result = composeTest(funcs)("hi");
  t.equal(result, "hicba");
  t.done();
});
