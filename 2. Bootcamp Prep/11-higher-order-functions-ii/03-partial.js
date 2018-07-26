const partial = (cb, argOne) => (argTwo) => cb(argOne, argTwo);

function summer(a, b) {
  return a + b;
};

let sumFive = partial(summer, 5);
console.log(sumFive(10));