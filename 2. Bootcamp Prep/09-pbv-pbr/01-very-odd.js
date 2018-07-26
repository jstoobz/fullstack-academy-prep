const veryOdd = (arr) => {
  return arr.reduce((acc, el) => {
    if (el % 2 === 1) acc.push(el);
    return acc;
  }, []);
};

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums);
console.log('allTheNums:', allTheNums);