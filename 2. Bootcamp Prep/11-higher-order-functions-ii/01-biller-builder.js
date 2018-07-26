const billerBuilder = (state) => {
  const generateBiller = (shipping, sales) => {
    return (amount) => (amount * shipping * sales);
  }

  if (state === 'NY') return generateBiller(1.03, 1.04);
  if (state === 'NJ') return generateBiller(1.05, 1.06625);
};

let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100));

let newJersBiller = billerBuilder('NJ');
console.log(newJersBiller(100));