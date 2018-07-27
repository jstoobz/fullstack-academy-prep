const arraySum = (arr) => {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) return acc + arraySum(el);
    else return acc + el;
  }, 0);
};

console.log(arraySum([1, [2, 3, [4]]]));