const dogBreeder = (nameOrAge = 'Steve', age = 0) => {
  return (typeof nameOrAge === 'number')
    ? { name: 'Steve', age: nameOrAge }
    : { name: nameOrAge, age: age }
};

console.log(dogBreeder('Sam', 12));
// console.log(dogBreeder(15));