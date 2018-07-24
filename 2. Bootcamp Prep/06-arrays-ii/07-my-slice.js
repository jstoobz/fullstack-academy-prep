const mySlice = (arr, startIdx = 0, endIdx = arr.length) => {
  let newArr = [];

  if (startIdx < 0) startIdx += arr.length;
  if (endIdx < 0) endIdx += arr.length;

  for (let i = startIdx; i < endIdx; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(mySlice([1, 2, 3], 1, 2));
// console.log(mySlice([1, 2, 3], 1));
// console.log(mySlice([1, 2, 3]));
// console.log(mySlice([1, 2, 3], -1));