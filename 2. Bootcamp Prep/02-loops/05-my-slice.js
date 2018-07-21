const mySlice = (str, startIdx = 0, endIdx = str.length) => {
  let newStr = '';

  for (let i = startIdx; i < endIdx; i++) {
    newStr += str[i];
  }

  return newStr;
}

console.log(mySlice('slice and dice'));
// console.log(mySlice('slice and dice', 2));
// console.log(mySlice('slice and dice', 2, 5));