const rotateArray = (arr, rotate) => {
  return arr.slice(-rotate).concat(arr.slice(0, -rotate));
}

console.log(rotateArray([1, 2, 3, 4, 5], -1));
// console.log(rotateArray([1, 2, 3, 4, 5], 1));
// console.log(rotateArray([1, 2, 3, 4, 5], -1));
// console.log(rotateArray([1, 2, 3, 4, 5], 0));