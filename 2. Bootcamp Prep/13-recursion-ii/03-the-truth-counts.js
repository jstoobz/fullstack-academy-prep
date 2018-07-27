const theTruthCounts = (arr) => {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) return acc + theTruthCounts(el);
    else return acc + !!el;
  }, 0);
};

console.log(theTruthCounts([0, [true, ['yes']]]));