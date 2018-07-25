const callThemAll = (obj, value) => {
  return Object.values(obj).reduce((acc, el) => {
    if (typeof el === 'function') acc.push(el(value));
    return acc;
  }, []);
};

let addNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

console.log(callThemAll(addNums, 100));