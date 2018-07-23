const myLastIndexOf = (arr, searchValue, startIdx = arr.length) => {
  for (let i = startIdx; i >= 0; i--) {
    if (arr[i] === searchValue) return i;
  }

  return -1;
};

console.log(myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'));
// console.log(myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'));
// console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2));