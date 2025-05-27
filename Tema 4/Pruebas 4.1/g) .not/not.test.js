const { producto } = require('./not');

test('El resultado no es igual a 10', () => {
  expect(producto(2, 3)).not.toBe(10);
});
