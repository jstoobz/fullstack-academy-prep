const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i < source.length; i++) {
    if (source.slice(i, i + searchValue.length) === searchValue) return i;
  }

  return -1;
}

console.log(myIndexOf('hello', 'lo'));