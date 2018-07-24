
const myJoin = (arr, separator = ',') => {
  return arr.reduce((acc, el, i) => {
    if (el === undefined || el === null) acc += separator;
    else if (i === arr.length - 1) acc += el;
    else acc += `${el}${separator}`;

    return acc;
  }, '');
}

console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' '));
// console.log(myJoin(['a', 'b', 'c'], '+'));
// console.log(myJoin(['Peter', 'Paul', 'Mary']));
// console.log(myJoin(['hello', undefined, 'world'], '-'));