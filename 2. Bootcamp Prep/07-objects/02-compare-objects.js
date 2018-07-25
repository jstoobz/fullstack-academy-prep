const compareObjects = (objOne, objTwo) => {
  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);

  if (objOneKeys.length !== objTwoKeys.length) return false;

  for (let i = 0; i < objOneKeys.length; i++) {
    if (objOne[objOneKeys[i]] !== objTwo[objOneKeys[i]]) return false;
  }

  return true;
};

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }));