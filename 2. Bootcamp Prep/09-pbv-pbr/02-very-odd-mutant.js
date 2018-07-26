const veryOddMutant = (arr) => {
  return arr.reduce((acc, el, i) => {
    if (el % 2 === 0) {
      arr[i] = 'normie';
      acc++;
    }

    return acc;
  }, 0);
};

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);
console.log('countRemoved:', countRemoved);