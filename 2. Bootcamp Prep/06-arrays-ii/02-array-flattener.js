const arrayFlattener = (arr) => {
  return [].concat(...arr);
}

console.log(arrayFlattener([1,[2, 3], 4]));