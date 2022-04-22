const UserService = require('./../services/UserService');

class UserView {
  static createUser(payload) {
    const keys = ['username', 'id', 'name'];

    if (!payload) return {error: 'payload no existe'};
    if (Object.values(payload).some(value => !value)) return {error: 'necesitan tener un valor válido'};
    if (keys.some(key => !payload[key])) return {error: 'necesitan tener un valor válido'};
  
    return UserService.create(payload.id, payload.username, payload.name);
  }
}

module.exports = UserView;
