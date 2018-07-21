const defaultGreet = (firstName, lastName = 'Doe') => `Hi ${firstName} ${lastName}!`;
console.log(defaultGreet('Chaka', 'Khan'));