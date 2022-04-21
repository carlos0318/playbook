const UserService = require('./../../app/services/UserService');

describe("Test for UserService", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "carlosOrtega", "Carlos");
    expect(user.username).toBe("carlosOrtega");
    expect(user.name).toBe("Carlos");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  })

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "carlosortega", "Carlos");
    const userInfoInList = UserService.getInfo(user);

    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("carlosortega");
    expect(userInfoInList[2]).toBe("Carlos");
    expect(userInfoInList[3]).toBe("Sin bio");
  })
})
