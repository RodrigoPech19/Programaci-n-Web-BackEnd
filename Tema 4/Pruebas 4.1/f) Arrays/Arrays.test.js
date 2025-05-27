const { obtenerNumeros } = require('./Arrays');

test('El array contiene el número 3', () => {
  expect(obtenerNumeros()).toContain(3);
});
