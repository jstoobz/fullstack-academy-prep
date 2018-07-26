const reverseArray = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const rightPos = (arr.length - 1) - i;
    const leftElem = arr[i];
    const rightElem = arr[rightPos];

    arr[i] = rightElem;
    arr[rightPos] = leftElem
  }

  return arr;
};

let myArray = [1, 2, 3, 4];
reverse(myArray);
console.log(myArray);