const { saludo } = require('./expresionesReg');

test('La cadena contiene "mundo"', () => {
  expect(saludo()).toMatch(/mundo/);
});
