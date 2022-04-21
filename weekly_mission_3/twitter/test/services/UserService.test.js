const UserService = require('./../../app/services/UserService');

describe("Test for UserService", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "carlosOrtega", "Carlos");
    expect(user.username).toBe("carlosOrtega");
    expect(user.name).toBe("Carlos");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  })
})
