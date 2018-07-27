const getDogBreeder = (defaultName, defaultAge) => {
  return (name = defaultName, age = defaultAge) => {
    return (typeof name === 'number')
      ? { name: defaultName, age: name }
      : { name: name, age: age }
  };
};

let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

console.log(puppyFarm('Olaf', 3));
console.log(puppyFarm(2));
console.log(rescueShelter());