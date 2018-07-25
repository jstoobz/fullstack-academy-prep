const me2 = {
  name: 'James',
  getGreeting: function(obj) {
    return `Hi ${obj.name}, my name is ${this.name}.`;
  },
};

const you = {
  name: 'Alyssa',
};

console.log(me2.name);
console.log(you.name);
console.log(me2.getGreeting(you));