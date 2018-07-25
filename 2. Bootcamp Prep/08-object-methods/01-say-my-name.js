const me = {
  name: 'James',
  getGreeting: function() {
    return `Hi, my name is ${this.name}.`;
  },
};

console.log(me.name);
console.log(me.getGreeting());