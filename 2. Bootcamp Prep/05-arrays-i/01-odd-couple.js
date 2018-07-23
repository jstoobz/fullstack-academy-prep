const oddCouple = (arr) => {
  return arr.filter(el => {
    if (el % 2 === 1 && oddArr.length < 2) return oddArr.push(el);
  }, oddArr = []);
};

console.log(oddCouple([10, 15, 20, 25, 3]));
// console.log(oddCouple([2, 4, 6, 8]));