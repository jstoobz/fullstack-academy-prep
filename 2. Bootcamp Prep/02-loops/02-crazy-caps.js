const crazyCaps = (string) => {
  let crazyString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) crazyString += string[i].toLowerCase();
    if (i % 2 === 1) crazyString += string[i].toUpperCase();
  }

  return crazyString;
}

console.log(crazyCaps('fullstack is amazing'));