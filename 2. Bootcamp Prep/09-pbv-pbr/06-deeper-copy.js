const deeperCopy = (arr) => {
  const copyArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (Array.isArray(currentElement)) {
      const innerArr = [];

      for (let j = 0; j < currentElement.length; j++) {
        const innerElement = currentElement[j];

        innerArr.push(innerElement);
      }

      copyArr.push(innerArr);
    } else {
      copyArr.push(currentElement);
    }
  }

  return copyArr;
};

let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray);

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray);