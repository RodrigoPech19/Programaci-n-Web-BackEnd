const { resta } = require('./ComapracionesNum');

test('5 es mayor que 3', () => {
  expect(resta(5, 3)).toBeGreaterThan(0);
});

test('5 es menor que 8', () => {
  expect(resta(5, 8)).toBeLessThan(0);
});

test('10 es igual a 10', () => {
  expect(resta(10, 10)).toBeGreaterThanOrEqual(0);
});
