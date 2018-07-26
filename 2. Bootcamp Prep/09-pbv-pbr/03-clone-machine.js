const cloneMachine = ({ name, species, offspring }) => {
  const clonedName = `${name}Clone`;

  const clonedAnimal = {
    name: clonedName,
    species: species,
    offspring: [],
  };

  offspring.push(clonedName);

  return clonedAnimal;
};

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone);
console.log(dolly);