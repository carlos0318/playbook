const User = require('./../models/user');

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, 'Sin bio');
  }

  static getInfo(user) {
    return Object.values(user);
  }

  static updateUserUsername(user, newUsername) {
    user.username = newUsername;
  }

  static getAllUsernames(users) {
    return users.map(user => user.username);
  }
}

module.exports = UserService;
