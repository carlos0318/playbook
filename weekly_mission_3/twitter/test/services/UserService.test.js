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

  test("3. Update username", () => {
    const user = UserService.create(1, "carlosortega", "Carlos");
    UserService.updateUserUsername(user, "carlosO");
    expect(user.username).toBe("carlosO")
  })

  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "carlogilmar1", "Carlo");
    const user2 = UserService.create(1, "carlogilmar2", "Carlo");
    const user3 = UserService.create(1, "carlogilmar3", "Carlo");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("carlogilmar1")
    expect(usernames).toContain("carlogilmar2")
    expect(usernames).toContain("carlogilmar3")
  })
})
