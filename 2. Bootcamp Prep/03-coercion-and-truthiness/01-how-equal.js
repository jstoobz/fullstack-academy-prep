const howEqual = (a, b) => (
  (a === b)
    ? `strictly`
    : (a == b)
    ? `loosely`
    : `not equal`
);

console.log(howEqual(0, '0'));
// console.log(howEqual(3, 9/3));
// console.log(howEqual(true, 'truthy'));