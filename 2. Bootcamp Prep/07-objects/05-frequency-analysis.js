const frequencyAnalysis = (str) => {
  return str.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
};

console.log(frequencyAnalysis('abca'));