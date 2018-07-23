const isTruthy = (a) => (
  (a === false)
    ? `The boolean value false is falsey`
    : (a === null)
    ? `The null value is falsey`
    : (a === undefined)
    ? `undefined is falsey`
    : (a === 0)
    ? `The number 0 is falsey (the only falsey number)`
    : (a === '')
    ? `The empty string is falsey (the only falsey string)`
    : true
);

console.log(isTruthy(false));
// console.log(isTruthy(null));
// console.log(isTruthy(undefined));
// console.log(isTruthy(0));
// console.log(isTruthy(''));
// console.log(isTruthy('I yearn for truth'));