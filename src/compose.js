function compose(...funcs) {
  if (Array.isArray(funcs[0])) funcs = funcs[0];
  return function(arg) {
    return funcs.reduceRight((result, func) => func(result), arg);
  };
}

module.exports = compose;
