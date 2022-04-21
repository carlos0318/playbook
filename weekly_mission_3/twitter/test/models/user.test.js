const User = require('./../../app/models/user');

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    // Aquí invocamos el código que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated");

    // Aquí validas los resultados de ese código
    // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined(); // verifca que el valor no sea undefine
    expect(user.lastUpdated).not.toBeUndefined();
  })

})
