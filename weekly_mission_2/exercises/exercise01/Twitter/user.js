const user = {
  user: 'Carlos Ortega',
  username: "Astaroth0318",
  age: 23,

  getUser: function() {
    return `User: ${this.user}`;
  },

  getInfo: function() {
    return `Username: ${this.username}, age: ${this.age}`;
  }
}

console.log(user.getUser());
console.log(user.getInfo());
