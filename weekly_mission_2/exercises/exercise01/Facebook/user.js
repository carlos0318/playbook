const user = {
  user: "Carlos Ortega",
  age: 23,
  dateOfBirth: "25/07/1998",
  email: 'carlos.ortega.ast0318@gmail.com',

  getUser: function() {
    return `User: ${this.user}`;
  },

  getInfo: function() {
    return `Age: ${this.age}, Date of birth: ${this.dateOfBirth}`;
  },

  getEmail: function() {
    return `email: ${this.email}`;
  }
}

console.log(user.getUser());
console.log(user.getInfo());
console.log(user.getEmail());
