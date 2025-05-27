const {sumar}=require('./sumar');

test('10 + 10 es igual a 20', () => {
  expect(sumar(10, 10)).toBe(20);
});
