const mySplice = (arr, startIdx, deleteCount, ...args) => {
  const startElements = [];
  const deletedElements = [];

  for (let i = 0; i < startIdx; i++) {
    startElements.push(arr.shift());
  }

  for (let i = 0; i < deleteCount; i++) {
    deletedElements.push(arr.shift());
  }

  for (let i = args.length - 1; i >= 0; i--) {
    const currentArg = args[i];
    arr.unshift(currentArg);
  }

  for (let i = startElements.length - 1; i >= 0; i--) {
    const currentStartElement = startElements[i];
    arr.unshift(currentStartElement);
  }

  return deletedElements;
};

let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples');

console.log(myArray);