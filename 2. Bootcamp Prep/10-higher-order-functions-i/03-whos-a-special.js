const whosASpecial = (arr) => {
  let petStr = '';

  arr.forEach((el, i) => {
    petStr += `${el.name} the ${el.species} is very special!`;

    if (i !== arr.length - 1) petStr += ' ';
  });

  return petStr;
};

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

console.log(whosASpecial(specialPets));