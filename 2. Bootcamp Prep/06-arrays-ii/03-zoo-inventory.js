const zooInventory = (arr) => {
  let animalFacts = [];

  for (let i = 0; i < arr.length; i++) {
    const [animalName, [animalType, animalAge]] = arr[i];

    animalFacts.push(`${animalName} the ${animalType} is ${animalAge}.`);
  }

  return animalFacts;
}

let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));